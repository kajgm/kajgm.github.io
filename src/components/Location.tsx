export function Location(props: { location: string }) {
  const { location } = props;
  return (
    <a className="flex flex-wrap">
      <svg
        className="mt-1 w-4 h-4 fill-light-sub-text-color group-hover:fill-red-800 dark:fill-dark-sub-text-color dark:group-hover:fill-red-800 group-hover:transition-color group-hover:duration-500 group-hover:ease-in-out ease-in-out transition duration-500"
        viewBox="0 0 395.71 395.71"
      >
        <path d="M197.849 0C122.131 0 60.531 61.609 60.531 137.329c0 72.887 124.591 243.177 129.896 250.388l4.951 6.738a3.064 3.064 0 0 0 2.471 1.255 3.08 3.08 0 0 0 2.486-1.255l4.948-6.738c5.308-7.211 129.896-177.501 129.896-250.388C335.179 61.609 273.569 0 197.849 0zm0 88.138c27.13 0 49.191 22.062 49.191 49.191 0 27.115-22.062 49.191-49.191 49.191-27.114 0-49.191-22.076-49.191-49.191 0-27.129 22.076-49.191 49.191-49.191z" />
      </svg>
      <p
        className="m-0 text-md font-medium pl-1 text-light-sub-text-color dark:text-dark-sub-text-color transform transition duration-500"
        data-testid="location"
      >
        {location}
      </p>
    </a>
  );
}
