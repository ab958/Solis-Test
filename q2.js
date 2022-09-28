db.house.aggregate([
  {
    $lookup: {
      from: "owner",
      localField: "ownerID",
      foreignField: "_id",
      as: "inventory_docs"
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
          "inventory_docs.province": {
            "$eq": "kpk"
          }
        }
      ]
    }
  },
  
])