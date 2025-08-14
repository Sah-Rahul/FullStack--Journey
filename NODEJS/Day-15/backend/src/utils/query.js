// Build Mongo filter, sort, pagination from req.query
function buildQuery(reqQuery) {
  const {
    q,                        // keyword search
    completed,                // true/false
    user,                     // user id
    createdFrom,              // ISO date
    createdTo,                // ISO date
    sort = "-createdAt",      // e.g. createdAt, -title, completed,-createdAt
    page = 1,
    limit = 10,
    select,                   // "title,completed"
  } = reqQuery;

  // ------- FILTER -------
  const filter = {};

  // Keyword search (prefer $text; fallback to regex OR)
  if (q && q.trim()) {
    // If you created a text index, use $text:
    // filter.$text = { $search: q.trim() };

    // Regex fallback (case-insensitive) across title/description:
    filter.$or = [
      { title: { $regex: q.trim(), $options: "i" } },
      { description: { $regex: q.trim(), $options: "i" } },
    ];
  }

  if (typeof completed !== "undefined") {
    if (completed === "true" || completed === true) filter.completed = true;
    else if (completed === "false" || completed === false) filter.completed = false;
  }

  if (user) filter.user = user;

  // Date range on createdAt
  if (createdFrom || createdTo) {
    filter.createdAt = {};
    if (createdFrom) filter.createdAt.$gte = new Date(createdFrom);
    if (createdTo) filter.createdAt.$lte = new Date(createdTo);
  }

  // ------- SORT -------
  // support comma-separated multi-sort: "completed,-createdAt"
  const sortFields = {};
  ("" + sort)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .forEach((field) => {
      if (field.startsWith("-")) sortFields[field.substring(1)] = -1;
      else sortFields[field] = 1;
    });

  // ------- PAGINATION -------
  const pageNum = Math.max(parseInt(page, 10) || 1, 1);
  const limitNum = Math.min(Math.max(parseInt(limit, 10) || 10, 1), 100); // cap at 100
  const skip = (pageNum - 1) * limitNum;

  // ------- PROJECTION (SELECT) -------
  // Allow comma-separated fields: "title,completed"
  let projection = null;
  if (select) {
    projection = ("" + select)
      .split(",")
      .map((f) => f.trim())
      .filter(Boolean)
      .join(" ");
  }

  return { filter, sort: sortFields, page: pageNum, limit: limitNum, skip, projection };
}

module.exports = { buildQuery };
