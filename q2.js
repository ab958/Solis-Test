db.house.aggregate([
  {
    $lookup: {
      from: "owner",
      localField: "ownerID",
      foreignField: "_id",
      as: "general_docs"
    }
  },
  {
    $match: {
      $or: [
        {
          ratingsAverage: {
            $gt: 0,
            $lt: 3
          }
        },
        {
          "general_docs.province": {
            "$eq": "kpk"
          }
        }
      ]
    }
  },
  
])