export const SignupButton = (props: any) => {
  return (
    <button
      onClick={props.signup}
      type="button"
      className="text-gray-900 mt-6 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
    >
      Decentralize SignUp
    </button>
  );
};
