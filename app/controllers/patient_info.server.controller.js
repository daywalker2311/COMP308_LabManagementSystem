const DailyInfo = require("mongoose").model("PatientInfo");

exports.saveDailyInfo = function (req, res) {

  let data = {
    ...req.body,
  };

  console.log(data);
  var dailyInfo = new DailyInfo(data);
  console.log(dailyInfo);

  dailyInfo.save(function (err) {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    } else {
      res.status(200).json(dailyInfo);
    }
  });
};
