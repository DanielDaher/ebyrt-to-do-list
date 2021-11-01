const validateReqBody = ({ task, status }) => {
  if (typeof task !== 'string' || task.length < 1) return null;
  if (typeof status !== 'string' || status.length < 1) return null;

  return true;
};

module.exports = {
  validateReqBody,
};
