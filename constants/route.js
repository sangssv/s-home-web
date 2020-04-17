export const ROUTE = {
  interiorDesign: '/interior-design',
};

export const INTERIOR_DESIGN_SLUGS = [{
  path: `${ROUTE.interiorDesign}/all`,
  title: 'Tất cả',
}, {
  path: `${ROUTE.interiorDesign}/apartment`,
  title: 'Căn hộ - Chung cư',
}, {
  path: `${ROUTE.interiorDesign}/residence`,
  title: 'Nhà phố',
}, {
  path: `${ROUTE.interiorDesign}/villa`,
  title: 'Biệt thự',
}, {
  path: `${ROUTE.interiorDesign}/office`,
  title: 'Văn phòng',
}, {
  path: `${ROUTE.interiorDesign}/hotel`,
  title: 'Nhà hàng - Khách sạn',
}];

export const routes = [{
  path: '/',
  title: 'Trang chủ',
}, {
  path: '/architecture',
  title: 'Kiến trúc',
}, {
  path: ROUTE.interiorDesign,
  title: 'Thiết kế nội thất',
  children: INTERIOR_DESIGN_SLUGS,
}, {
  path: '/projects',
  title: 'Sản phẩm thực tế',
}, {
  path: '/about_us',
  title: 'Về chúng tôi',
}, {
  path: '/contact',
  title: 'Liên hệ',
}];

export const INTERIOR_DESIGN_SLUG_LABEL = {
  'all': 'Tất cả',
  'apartment': 'Căn hộ - Chung cư',
  'residence': 'Nhà phố',
  'villa': 'Biệt thự',
  'office': 'Văn phòng',
  'hotel': 'Nhà hàng - Khách sạn',
}
