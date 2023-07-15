// import { Credentials } from 'aws-sdk'
// import S3 from 'aws-sdk/clients/s3'

import { getServerSession } from 'next-auth'
import {
  // DeleteObjectCommand,
  // PutBucketCorsCommand,
  // PutObjectCommand,
  DeleteObjectCommand,
  PutBucketCorsCommand,
  S3Client,
} from '@aws-sdk/client-s3'
import { createPresignedPost } from '@aws-sdk/s3-presigned-post'

export default async function API(req, res) {
  let session = await getServerSession(req, res)

  if (!session) {
    return res.status(406).json({
      msg: 'bad auth',
    })
  }

  if (allowRoles(['devroot'])) {
  } else {
    return res.status(406).json({
      msg: 'bad auth',
    })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      msg: 'method not allowed',
    })
  }

  let bodyData = JSON.parse(req.body)
  let payload = bodyData.payload || {}
  let action = bodyData.action || {}

  if (action === 'signFile') {
    //FILE_S3_STORAGE_ACCESS_KEY
    //FILE_S3_STORAGE_ACCESS_KEY_SECRET
    //FILE_S3_STORAGE_REGION
    //FILE_S3_STORAGE_BUCKET
    //FILE_S3_STORAGE_ENDPOINT

    const s3Client = new S3Client({
      // // endpoint: process.env.LOK_S3_ENDPOINT,
      // sslEnabled: true,
      // s3ForcePathStyle: false,
      region: process.env.FILE_S3_STORAGE_REGION,
      credentials: {
        accessKeyId: process.env.FILE_S3_STORAGE_ACCESS_KEY,
        secretAccessKey: process.env.FILE_S3_STORAGE_ACCESS_KEY_SECRET,
      },
    })

    await s3Client.send(
      new PutBucketCorsCommand({
        Bucket: `${process.env.FILE_S3_STORAGE_BUCKET}`,
        CORSConfiguration: {
          CORSRules: [
            {
              AllowedHeaders: ['*'],
              AllowedMethods: ['PUT', 'GET', 'POST'],
              AllowedOrigins: ['*'],
              ExposeHeaders: [],
            },
          ],
        },
      }),
    )

    let folder = `${process.env.FILE_S3_STORAGE_FOLDER_ROOT}/${payload.username}`
    let post = await createPresignedPost(s3Client, {
      Bucket: `${process.env.FILE_S3_STORAGE_BUCKET}`,
      Key: `${folder}/${payload.fileName}`,
      Fields: {
        acl: 'public-read',
        'Content-Type': `${payload.contentType}`,
      },
      Expires: 600, // seconds
      Conditions: [
        ['content-length-range', 0, payload.size], // up to 1 MB
      ],
    })

    post.baseURL = `${process.env.FILE_S3_STORAGE_ENDPOINT}`
    post.downloadURL = `/${folder}/${payload.fileName}`

    return res.status(200).json({
      status: 'ok',
      result: post,
    })
  }

  if (action === 'deleteFile') {
    const s3Client = new S3Client({
      region: process.env.FILE_S3_STORAGE_REGION,
      credentials: {
        accessKeyId: process.env.FILE_S3_STORAGE_ACCESS_KEY,
        secretAccessKey: process.env.FILE_S3_STORAGE_ACCESS_KEY_SECRET,
      },
    })

    const params = {
      Bucket: `${payload.fields.bucket}`,
      Key: `${payload.fields.key}`,
    }

    await s3Client.send(new DeleteObjectCommand(params))

    return res.status(200).json({
      ok: 'removed',
    })
  }
}
