export function CRUD() {
  return (
    <>
      {/*  */}
      <main className='relative h-full w-full overflow-hidden'>
        <div className='block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex lg:mt-1.5'>
          <div className='mb-1 w-full'>
            <div className='mb-4'>
              <nav className='mb-5 flex' aria-label='Breadcrumb'>
                <ol className='inline-flex items-center space-x-1 text-sm font-medium md:space-x-2'>
                  <li className='inline-flex items-center'>
                    <a
                      href='#'
                      className='hover:text-primary-600 inline-flex items-center text-gray-700 dark:text-gray-300 dark:hover:text-white'
                    >
                      <svg
                        className='mr-2.5 h-5 w-5'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <div className='flex items-center'>
                      <svg
                        className='h-6 w-6 text-gray-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                      <a
                        href='#'
                        className='hover:text-primary-600 ml-1 text-gray-700 dark:text-gray-300 dark:hover:text-white md:ml-2'
                      >
                        E-commerce
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='flex items-center'>
                      <svg
                        className='h-6 w-6 text-gray-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                      <span className='ml-1 text-gray-400 dark:text-gray-500 md:ml-2' aria-current='page'>
                        Products
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className='text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl'>All products</h1>
            </div>
            <div className='block items-center justify-between dark:divide-gray-700 sm:flex md:divide-x md:divide-gray-100'>
              <div className='mb-4 flex items-center sm:mb-0'>
                <form className='sm:pr-3' action='#' method='GET'>
                  <label for='products-search' className='sr-only'>
                    Search
                  </label>
                  <div className='relative mt-1 w-48 sm:w-64 xl:w-96'>
                    <input
                      type='text'
                      name='email'
                      id='products-search'
                      className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 sm:text-sm'
                      placeholder='Search for products'
                    />
                  </div>
                </form>
                <div className='flex w-full items-center sm:justify-end'>
                  <div className='flex space-x-1 pl-2'>
                    <a
                      href='#'
                      className='inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                    >
                      <svg
                        className='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </a>
                    <a
                      href='#'
                      className='inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                    >
                      <svg
                        className='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </a>
                    <a
                      href='#'
                      className='inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                    >
                      <svg
                        className='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </a>
                    <a
                      href='#'
                      className='inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                    >
                      <svg
                        className='h-6 w-6'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <button
                id='createProductButton'
                className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4'
                type='button'
                data-drawer-target='drawer-create-product-default'
                data-drawer-show='drawer-create-product-default'
                aria-controls='drawer-create-product-default'
                data-drawer-placement='right'
              >
                Add new product
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='overflow-x-auto'>
            <div className='inline-block min-w-full align-middle'>
              <div className='overflow-hidden shadow'>
                <table className='min-w-full table-fixed divide-y divide-gray-200 dark:divide-gray-600'>
                  <thead className='bg-gray-100 dark:bg-gray-700'>
                    <tr>
                      <th scope='col' className='p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-all'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-all' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th
                        scope='col'
                        className='p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400'
                      >
                        Product Name
                      </th>
                      <th
                        scope='col'
                        className='p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400'
                      >
                        Technology
                      </th>
                      <th
                        scope='col'
                        className='p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400'
                      >
                        Description
                      </th>
                      <th
                        scope='col'
                        className='p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400'
                      >
                        ID
                      </th>
                      <th
                        scope='col'
                        className='p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400'
                      >
                        Price
                      </th>
                      <th
                        scope='col'
                        className='p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400'
                      >
                        Discount
                      </th>
                      <th
                        scope='col'
                        className='p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400'
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800'>
                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-194556'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-194556' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>Education Dashboard</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        Angular
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #194556
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $149
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>No</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-623232'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-623232' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>React UI Kit</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        React JS
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #623232
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $129
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>10%</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-194356'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-194356' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>Education Dashboard</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        Angular
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #194356
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $149
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>No</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-323323'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-323323' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>React UI Kit</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        React JS
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #323323
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $129
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>No</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-994856'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-994856' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>Education Dashboard</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        Angular
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #994856
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $149
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>25%</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-194256'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-194256' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>Education Dashboard</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        Angular
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #194256
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $149
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>10%</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-623378'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-623378' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>React UI Kit</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        React JS
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #623378
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $129
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>No</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-192856'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-192856' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>Education Dashboard</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        Angular
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #192856
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $149
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>No</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-523323'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-523323' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>React UI Kit</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        React JS
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #523323
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $129
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>No</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-191857'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-191857' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>Education Dashboard</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        Angular
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #191857
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $149
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>No</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-914856'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-914856' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>Education Dashboard</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        Angular
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #914856
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $149
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>30%</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-633293'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-633293' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>React UI Kit</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        React JS
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #633293
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $129
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>No</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-194556'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-194556' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>Education Dashboard</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        Angular
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #194556
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $149
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>No</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-623232'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-623232' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>React UI Kit</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        React JS
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #623232
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $129
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>No</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-194356'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-194356' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>Education Dashboard</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        Angular
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #194356
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $149
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>5%</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-323323'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-323323' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>React UI Kit</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        React JS
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #323323
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $129
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>No</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-994856'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-994856' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>Education Dashboard</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        Angular
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #994856
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $149
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>No</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-194256'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-194256' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>Education Dashboard</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        Angular
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #194256
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $149
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>No</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-623378'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-623378' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>React UI Kit</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        React JS
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #623378
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $129
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>50%</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-192856'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-192856' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>Education Dashboard</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        Angular
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #192856
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $149
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>No</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-523323'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-523323' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>React UI Kit</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        React JS
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #523323
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $129
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>No</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-191857'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-191857' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>Education Dashboard</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        Angular
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #191857
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $149
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>10%</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-914856'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-914856' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>Education Dashboard</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        Angular
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #914856
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $149
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>No</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>

                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='w-4 p-4'>
                        <div className='flex items-center'>
                          <input
                            id='checkbox-633293'
                            aria-describedby='checkbox-1'
                            type='checkbox'
                            className='focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800'
                          />
                          <label for='checkbox-633293' className='sr-only'>
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                        <div className='text-base font-semibold text-gray-900 dark:text-white'>React UI Kit</div>
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>Html templates</div>
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        React JS
                      </td>
                      <td className='max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-500 dark:text-gray-400 xl:max-w-xs'>
                        Start developing with an open-source library of over 450+ UI components, sections, and pages
                        built with the utility classes from Tailwind CSS and designed in Figma.
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        #633293
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>
                        $129
                      </td>
                      <td className='whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white'>No</td>

                      <td className='space-x-2 whitespace-nowrap p-4'>
                        <button
                          type='button'
                          id='updateProductButton'
                          data-drawer-target='drawer-update-product-default'
                          data-drawer-show='drawer-update-product-default'
                          aria-controls='drawer-update-product-default'
                          data-drawer-placement='right'
                          className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z'></path>
                            <path
                              fillRule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Update
                        </button>
                        <button
                          type='button'
                          id='deleteProductButton'
                          data-drawer-target='drawer-delete-product-default'
                          data-drawer-show='drawer-delete-product-default'
                          aria-controls='drawer-delete-product-default'
                          data-drawer-placement='right'
                          className='inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
                        >
                          <svg
                            className='mr-2 h-4 w-4'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                          Delete item
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className='sticky bottom-0 right-0 w-full items-center border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex sm:justify-between'>
          <div className='mb-4 flex items-center sm:mb-0'>
            <a
              href='#'
              className='inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              <svg className='h-7 w-7' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
            <a
              href='#'
              className='mr-2 inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              <svg className='h-7 w-7' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
            <span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
              Showing <span className='font-semibold text-gray-900 dark:text-white'>1-20</span> of{' '}
              <span className='font-semibold text-gray-900 dark:text-white'>2290</span>
            </span>
          </div>
          <div className='flex items-center space-x-3'>
            <a
              href='#'
              className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex flex-1 items-center justify-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
            >
              <svg
                className='-ml-1 mr-1 h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                  clipRule='evenodd'
                ></path>
              </svg>
              Previous
            </a>
            <a
              href='#'
              className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex flex-1 items-center justify-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:ring-4'
            >
              Next
              <svg
                className='-mr-1 ml-1 h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </main>
      {/*  */}
    </>
  )
}

function RemoveProductDrawer() {
  return (
    <>
      {/* <!-- Delete Product Drawer --> */}
      <div
        id='drawer-delete-product-default'
        className='  fixed left-0 top-0 z-40 h-screen w-full max-w-xs translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800'
        tabindex='-1'
        aria-labelledby='drawer-label'
        aria-hidden='true'
      >
        <h5
          id='drawer-label'
          className='inline-flex items-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400'
        >
          Delete item
        </h5>
        <button
          type='button'
          data-drawer-dismiss='drawer-delete-product-default'
          aria-controls='drawer-delete-product-default'
          className='absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
        >
          <svg
            aria-hidden='true'
            className='h-5 w-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span className='sr-only'>Close menu</span>
        </button>
        <svg
          className='mb-4 mt-8 h-10 w-10 text-red-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          ></path>
        </svg>
        <h3 className='mb-6 text-lg text-gray-500 dark:text-gray-400'>Are you sure you want to delete this product?</h3>
        <a
          href='#'
          className='mr-2 inline-flex items-center rounded-lg bg-red-600 px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
        >
          Yes, I'm sure
        </a>
        <a
          href='#'
          className='focus:ring-primary-300 inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
          data-modal-toggle='delete-product-modal'
        >
          No, cancel
        </a>
      </div>
    </>
  )
}
function EditProductDrawer() {
  return (
    <>
      {/* <!-- Edit Product Drawer --> */}
      <div
        id='drawer-update-product-default'
        className='absolute right-0 top-0 z-40 h-screen w-full max-w-xs  overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800'
        tabindex='-1'
        aria-labelledby='drawer-label'
        aria-hidden='true'
      >
        <h5
          id='drawer-label'
          className='mb-6 inline-flex items-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400'
        >
          Update Product
        </h5>
        <button
          type='button'
          data-drawer-dismiss='drawer-update-product-default'
          aria-controls='drawer-update-product-default'
          className='absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
        >
          <svg
            aria-hidden='true'
            className='h-5 w-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span className='sr-only'>Close menu</span>
        </button>
        <form action='#'>
          <div className='space-y-4'>
            <div>
              <label for='name' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
                Name
              </label>
              <input
                type='text'
                name='title'
                id='name'
                className='focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400'
                value='Education Dashboard'
                placeholder='Type product name'
                required=''
              />
            </div>
            <div>
              <label for='category' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
                Technology
              </label>
              <select
                id='category'
                className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400'
              >
                <option selected=''>Flowbite</option>
                <option value='RE'>React</option>
                <option value='AN'>Angular</option>
                <option value='VU'>Vue JS</option>
              </select>
            </div>
            <div>
              <label for='price' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
                Price
              </label>
              <input
                type='number'
                name='price'
                id='price'
                className='focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400'
                value='2999'
                placeholder='$149'
                required=''
              />
            </div>
            <div>
              <label for='description' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
                Description
              </label>
              <textarea
                id='description'
                rows='4'
                className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400'
                placeholder='Enter event description here'
              >
                Start developing with an open-source library of over 450+ UI components, sections, and pages built with
                the utility classes from Tailwind CSS and designed in Figma.
              </textarea>
            </div>
            <div>
              <label for='discount' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
                Discount
              </label>
              <select
                id='discount'
                className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400'
              >
                <option selected=''>No</option>
                <option value='5'>5%</option>
                <option value='10'>10%</option>
                <option value='20'>20%</option>
                <option value='30'>30%</option>
                <option value='40'>40%</option>
                <option value='50'>50%</option>
              </select>
            </div>
          </div>
          <div className='bottom-0 left-0 mt-4 flex w-full justify-center space-x-4 pb-4 sm:absolute sm:mt-0 sm:px-4'>
            <button
              type='submit'
              className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4'
            >
              Update
            </button>
            <button
              type='button'
              className='inline-flex w-full items-center justify-center rounded-lg border border-red-600 px-5 py-2.5 text-center text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900'
            >
              <svg
                aria-hidden='true'
                className='-ml-1 mr-1 h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
              Delete
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

function AddProductDrawer() {
  {
    /* <!-- Add Product Drawer --> */
  }
  return (
    <div
      id='drawer-create-product-default'
      className='absolute left-0 top-0 z-40 h-screen w-full max-w-xs overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800'
      tabindex='-1'
      aria-labelledby='drawer-label'
      aria-hidden='true'
    >
      <h5
        id='drawer-label'
        className='mb-6 inline-flex items-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400'
      >
        New Product
      </h5>
      <button
        type='button'
        data-drawer-dismiss='drawer-create-product-default'
        aria-controls='drawer-create-product-default'
        className='absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
      >
        <svg
          aria-hidden='true'
          className='h-5 w-5'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          ></path>
        </svg>
        <span className='sr-only'>Close menu</span>
      </button>
      <form action='#'>
        <div className='space-y-4'>
          <div>
            <label for='name' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
              Name
            </label>
            <input
              type='text'
              name='title'
              id='name'
              className='focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400'
              placeholder='Type product name'
              required=''
            />
          </div>

          <div>
            <label for='price' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
              Price
            </label>
            <input
              type='number'
              name='price'
              id='price'
              className='focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400'
              placeholder='$2999'
              required=''
            />
          </div>
          <div>
            <label for='category-create' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
              Technology
            </label>
            <select
              id='category-create'
              className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400'
            >
              <option selected=''>Select category</option>
              <option value='FL'>Flowbite</option>
              <option value='RE'>React</option>
              <option value='AN'>Angular</option>
              <option value='VU'>Vue</option>
            </select>
          </div>
          <div>
            <label for='description' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
              Description
            </label>
            <textarea
              id='description'
              rows='4'
              className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400'
              placeholder='Enter event description here'
            ></textarea>
          </div>
          <div>
            <label for='discount-create' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
              Discount
            </label>
            <select
              id='discount-create'
              className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400'
            >
              <option selected=''>No</option>
              <option value='5'>5%</option>
              <option value='10'>10%</option>
              <option value='20'>20%</option>
              <option value='30'>30%</option>
              <option value='40'>40%</option>
              <option value='50'>50%</option>
            </select>
          </div>
          <div className='bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4'>
            <button
              type='submit'
              className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4'
            >
              Add product
            </button>
            <button
              type='button'
              data-drawer-dismiss='drawer-create-product-default'
              aria-controls='drawer-create-product-default'
              className='focus:ring-primary-300 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600'
            >
              <svg
                aria-hidden='true'
                className='-ml-1 h-5 w-5 sm:mr-1'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12'></path>
              </svg>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
