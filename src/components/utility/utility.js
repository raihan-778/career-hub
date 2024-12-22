const getStoredJobApplication = () => {
  const storedJobApplication = JSON.parse(
    localStorage.getItem("job-applications")
  );
  if (storedJobApplication) {
    return storedJobApplication;
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedJobApplication = getStoredJobApplication();
  const exist = storedJobApplication.find((jobId) => jobId === id);

  if (!exist) {
    storedJobApplication.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplication)
    );
  }
};

// const setDataToLocalStorage = (key, data) =>
//   localStorage.setItem(key, JSON.stringify(data));
export { getStoredJobApplication, saveJobApplication };
