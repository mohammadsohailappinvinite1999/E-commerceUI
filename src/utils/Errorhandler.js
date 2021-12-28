export const ErrorHandler = async (cb) => {
  cb.then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
};
