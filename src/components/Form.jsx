import React from 'react'

const Form = () => {
  return (
    <section className="py-10 px-4 leading-normal bg-wine-100">
      <div className="my-container mx-auto md:px-20 lg:w-1/2">
        <h2 className="my-title mb-12">聯絡我們</h2>
        <p>
          我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。
        </p>
        <div className="py-6">
          <div className="flex flex-col gap-4">
            <label className="block">
              <span>姓名</span>
              <input type="text" className="
            mt-1
            block
            w-full
            bg-transparent
            border
            focus:border-gray-500 focus:bg-white focus:ring-0
          " placeholder="陳小明" />
            </label>
            <label className="block">
              <span>聯絡電話</span>
              <input type="tel" className="
            mt-1
            block
            w-full
            bg-transparent
            border
            focus:border-gray-500 focus:bg-white focus:ring-0
          " placeholder="0912-345-678" />
            </label>
            <label className="block">
              <span>電子郵件</span>
              <input type="email" className="
            mt-1
            block
            w-full
            bg-transparent
            border
            focus:border-gray-500 focus:bg-white focus:ring-0
          " placeholder="example@email.com" />
            </label>
            <label className="block">
              <span>意見反應</span>
              <textarea className="
            mt-1
            block
            w-full
            bg-transparent
            border
            focus:border-gray-500 focus:bg-white focus:ring-0
          " rows="5" placeholder="請輸入您的意見" />
            </label>


            <div className="block">
              <label className="inline-flex items-center">
                <input type="checkbox" className="
                  bg-transparent
                  border
                  focus:border-transparent focus:bg-gray-200
                  text-gray-700
                  focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                " />
                <span class="ml-2">我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form