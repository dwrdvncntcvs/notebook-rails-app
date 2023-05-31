module Pagination
  extend ActiveSupport::Concern

  def paginated_data(name, filter)
    page = filter[:page]
    limit = filter[:limit]
    where = filter[:where]

    offset_value = (page - 1) * limit

    data = where(where).offset(offset_value).limit(limit)
    count = where(where).count
    total_pages = (count / limit.to_f).ceil

    result = {}
    result[name] = data
    result['meta'] = { page:, limit:, total_pages: }

    result
  end
end
