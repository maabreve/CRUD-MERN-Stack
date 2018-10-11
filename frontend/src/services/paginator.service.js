export default function Paginator(_items, _page, _per_page) {
  if (!_items) {
    return [];
  }
    
  var page = _page || 1,
    per_page = _per_page || 10,
    offset = (page - 1) * per_page,

    paginatedItems = _items.slice(offset).slice(0, per_page),
    total_pages = Math.ceil(_items.length / per_page);
  return {
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: (total_pages > page) ? page + 1 : null,
    total: _items.length,
    total_pages: total_pages,
    data: paginatedItems,
    fulldata: _items
  };
}
