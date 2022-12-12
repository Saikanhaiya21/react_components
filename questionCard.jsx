import React, { useState } from "react";
const QuestionCard = () => {
  const [data] = useState([
    {
      q: "Identification asndljsdn endfjsnkj dsfndjnkd dnfjn dfnl nfl sfnlnfd nlnlf ln lsnlkn lnln nl lnl nlnl nllj nlnl nlkn nln lnln nln",
      option: [" Driver License", "State ID", " US Millitary", "  US Passport"],
    },
    {
      q: "Choose Your Language",
      option: ["C", "Java", "Python", "JavaScript"],
    },
  ]);
  return (
    <div>
    {data?data.map((val,index)=>{
      return (
        <div key={index} class="w-full md:max-w-xl rounded-lg p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

      <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
        {val.q}
      </h3>
      <ul class="items-center w-full g-10 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center pl-3 ">
            <input
              id="horizontal-list-radio-license"
              type="radio"
              value=""
              name="list-radio"
              class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="horizontal-list-radio-license"
              class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >
             {val.option[0]}
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id="horizontal-list-radio-id"
              type="radio"
              value=""
              name="list-radio"
              class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="horizontal-list-radio-id"
              class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {val.option[1]}
            </label>
          </div>
        </li>
        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id="horizontal-list-radio-millitary"
              type="radio"
              value=""
              name="list-radio"
              class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="horizontal-list-radio-millitary"
              class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {val.option[2]}
            </label>
          </div>
        </li>
        <li class="w-full dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id="horizontal-list-radio-passport"
              type="radio"
              value=""
              name="list-radio"
              class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="horizontal-list-radio-passport"
              class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >
             {val.option[3]}
            </label>
          </div>
        </li>
      </ul>
    </div>
      )
    }):""}
    </div>
  );
};
export default QuestionCard;
