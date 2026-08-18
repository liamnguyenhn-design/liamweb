export type CaseStudy = {
  id: string;
  brand: string;
  title: string;
  tag: string;
  year: string;
  description: string;
  metric: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  bullets: string[];
  tag: string;
};

export type Award = {
  title: string;
  org: string;
  year: string;
  description: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type LangContent = {
  nav: { about: string; journey: string; awards: string; work: string; contact: string; cta: string };
  hero: {
    eyebrow: string;
    name: string;
    roleLine1: string;
    roleLine2: string;
    pitch: string;
    ctaPrimary: string;
    ctaSecondary: string;
    credential: string;
    scrollHint: string;
  };
  stats: Stat[];
  summary: {
    label: string;
    heading: string;
    body: string;
    highlights: { title: string; body: string }[];
  };
  moments: {
    label: string;
    heading: string;
    sub: string;
    items: { src: string; caption: string }[];
  };
  timeline: { label: string; heading: string; sub: string; items: TimelineItem[] };
  awards: { label: string; heading: string; sub: string; items: Award[] };
  portfolio: { label: string; heading: string; sub: string; items: CaseStudy[]; viewCase: string; brandsLabel: string };
  brands: string[];
  contact: {
    label: string;
    heading: string;
    sub: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formSubmit: string;
    formSending: string;
    formSuccess: string;
    formError: string;
    directLabel: string;
    email: string;
    phone: string;
    location: string;
    socialLabel: string;
  };
  footer: { rights: string; back: string };
};

export const content: Record<"vi" | "en", LangContent> = {
  vi: {
    nav: {
      about: "Về tôi",
      journey: "Hành trình",
      awards: "Giải thưởng",
      work: "Dự án",
      contact: "Liên hệ",
      cta: "Kết nối hợp tác",
    },
    hero: {
      eyebrow: "Content Strategy & Creator Network Consultant",
      name: "HOÀNG NGUYỄN",
      roleLine1: "Kiến tạo hệ sinh thái nội dung",
      roleLine2: "từ con số 0 đến hàng tỷ lượt xem.",
      pitch:
        "Chuyên gia tư vấn chiến lược nội dung số & phát triển mạng lưới Creators, với 11 năm trực tiếp xây dựng, thương mại hóa và mở rộng các hệ sinh thái sáng tạo — từ cộng đồng Parkour lớn nhất Việt Nam đến các chiến dịch triệu đô cho Techcombank, Nike, Samsung.",
      ctaPrimary: "Xem dự án tiêu biểu",
      ctaSecondary: "Trao đổi hợp tác",
      credential: "Director of Communications & Partnerships",
      scrollHint: "Cuộn để khám phá",
    },
    stats: [
      { value: "11+", label: "Năm kinh nghiệm điều hành" },
      { value: "3M+", label: "Followers đa nền tảng" },
      { value: "2B+", label: "Lượt xem tích lũy" },
      { value: "105B+", label: "VNĐ doanh thu phòng vé / 10 ngày" },
      { value: "20+", label: "Thương hiệu lớn đã đồng hành" },
    ],
    summary: {
      label: "Về tôi",
      heading: "Người biến sự am hiểu công chúng thành đòn bẩy vĩ mô cho thương hiệu",
      body: "Tôi là chuyên gia điều hành chiến lược với 11 năm kinh nghiệm kiến tạo và mở rộng các hệ sinh thái số — sở hữu năng lực thực chiến phát triển những tổ hợp quy tụ cộng đồng từ con số 0. Nền tảng lãnh đạo của tôi là ứng dụng khoa học, công nghệ và chuyển đổi số để biến tốc độ thực thi của khối tư nhân thành những giá trị di sản bền vững.",
      highlights: [
        {
          title: "Zero-to-One",
          body: "Trực tiếp sáng lập và thương mại hóa các hệ sinh thái nội dung từ con số 0 — Highnoy, Challenge Me, METUB Creators.",
        },
        {
          title: "Quản trị Đối tác Chiến lược",
          body: "Ráp nối mạng lưới hàng trăm nhà sáng tạo và thương hiệu, tối ưu nguồn lực để tạo ra những dự án mang sức ảnh hưởng lớn.",
        },
        {
          title: "Đa vai trò Điều hành",
          body: "Từ Partner Manager đến Head of Creators, từ đạo diễn hình ảnh đến Giám đốc Truyền thông cho dự án điện ảnh trăm tỷ.",
        },
      ],
    },
    moments: {
      label: "Khoảnh khắc",
      heading: "Những dấu ấn ngoài đời thực",
      sub: "Từ trụ sở các nền tảng toàn cầu đến các diễn đàn KOL và chuyển đổi số trong nước.",
      items: [
        {
          src: "/images/moments/google.jpg",
          caption: "Tại trụ sở Google — gắn với hành trình đại diện Việt Nam trong chương trình Google Adventure",
        },
        {
          src: "/images/moments/candid.jpg",
          caption: "Hội nghị KOL — Ra mắt CLB Niềm tin số Thủ đô, phối hợp Công an TP Hà Nội & VCCorp",
        },
        {
          src: "/images/moments/kol-event.jpg",
          caption: "Diễn đàn \"Kỷ nguyên vươn mình của dân tộc\"",
        },
        {
          src: "/images/moments/award-event.jpg",
          caption: "Vinh danh tại các diễn đàn KOL & chuyển đổi số",
        },
      ],
    },
    timeline: {
      label: "Hành trình sự nghiệp",
      heading: "11 năm, ba hệ sinh thái, một mạch tăng trưởng liên tục",
      sub: "Từ người sáng lập một cộng đồng thể thao đường phố đến vị trí điều hành chiến lược truyền thông cho các dự án trăm tỷ.",
      items: [
        {
          period: "Th.02/2025 — Th.02/2026",
          title: "Giám đốc Truyền thông Đa kênh",
          org: "Challenge Me Entertainment",
          tag: "Điện ảnh",
          bullets: [
            "Trực tiếp thiết kế chiến lược Tiếp thị Tích hợp cho dự án điện ảnh \"Đèn Âm Hồn – Bà Đừng Buồn Con\".",
            "Quy hoạch hệ thống nội dung vệ tinh đa nền tảng, đạt mức phủ sóng 200 triệu lượt xem/tháng.",
            "Đóng góp trực tiếp vào doanh thu phòng vé hơn 105 tỷ VNĐ chỉ trong 10 ngày khởi chiếu.",
          ],
        },
        {
          period: "Th.01/2023 — Th.01/2025",
          title: "Head of METUB Creators",
          org: "METUB Việt Nam",
          tag: "Quản trị Điều hành",
          bullets: [
            "Chủ động hoạch định chiến lược và thuyết phục Ban lãnh đạo phê duyệt dự án kinh doanh mới \"METUB Creators\".",
            "Định hướng dịch chuyển mô hình từ \"Quản lý đối tác\" sang \"Sở hữu & Khai thác tài sản số\".",
            "Lãnh đạo production house gần 800 video, kênh thương hiệu đạt 75 triệu lượt xem, 80.000+ subscriber tự nhiên.",
          ],
        },
        {
          period: "Th.05/2021 — Th.12/2022",
          title: "Senior Partner Manager",
          org: "METUB Việt Nam",
          tag: "Quản trị Đối tác",
          bullets: [
            "Quản trị hiệu suất danh mục gần 200 kênh YouTube đối tác, doanh thu ổn định 35.000 USD/tháng.",
            "Tư vấn chiến lược cấp cao cho các IP: ca sĩ Trần Tùng Anh, thương hiệu Tailor Veston, kênh Xuân Bắc Official.",
          ],
        },
        {
          period: "Th.05/2020 — Th.04/2021",
          title: "Partner Manager",
          org: "METUB Việt Nam",
          tag: "Quản trị Đối tác",
          bullets: [
            "Định hướng phát triển nội dung đa ngành cho gần 100 nhà sáng tạo đối tác, doanh thu 15.000–20.000 USD/tháng.",
            "Vinh danh Top 3 nhân sự xuất sắc nhất toàn quốc (2020–2021).",
          ],
        },
        {
          period: "Th.08/2017 — Th.04/2020",
          title: "Chuyên gia Sáng tạo & Đối tác Truyền thông Độc lập",
          org: "Content Creator",
          tag: "Sản xuất Nội dung",
          bullets: [
            "Chỉ đạo toàn bộ ý tưởng, kịch bản và sản xuất chiến dịch viral cho Samsung, Mentos, TH True Milk, Tiger Beer.",
            "Chuyên gia trải nghiệm & MC series tài liệu \"S-Việt Nam\" trên sóng VTV3 khung giờ vàng.",
          ],
        },
        {
          period: "Th.06/2016 — Hiện tại",
          title: "Trưởng nhóm Phát triển & Thương mại hóa",
          org: "Challenge Me – \"Hãy Thách Thức Tôi\"",
          tag: "Zero-to-One",
          bullets: [
            "Gia nhập từ mốc 6.000 người đăng ký, định hình kịch bản và chiến lược nội dung cốt lõi.",
            "Đưa hệ sinh thái lên 4,6 triệu subscriber YouTube + 4 triệu follow Facebook, hơn 3,6 tỷ lượt xem toàn hệ thống.",
            "Doanh thu lũy kế 10 năm đạt xấp xỉ 93 tỷ VNĐ; mảng bán lẻ mang về 300 triệu VNĐ ngay tháng đầu mở bán.",
          ],
        },
        {
          period: "Th.01/2015 — Hiện tại",
          title: "Nhà sáng lập & Giám đốc Điều hành",
          org: "Highnoy — Hệ sinh thái Thể thao Đường phố",
          tag: "Zero-to-One",
          bullets: [
            "Tiên phong kiến tạo cộng đồng Parkour lớn nhất Việt Nam từ con số 0 — cán mốc 3 triệu followers đa nền tảng.",
            "Chuyển hóa cộng đồng thành phễu tiếp thị chiến lược độc quyền cho Techcombank, Nike, Redbull, Vingroup, Biti's.",
            "Gần 2 tỷ lượt xem tích lũy tính đến 2026.",
          ],
        },
      ],
    },
    awards: {
      label: "Thành tựu & Giải thưởng",
      heading: "Vinh danh từ những chiến dịch bứt phá",
      sub: "Các giải thưởng sáng tạo nội dung được trao bởi chính các nhãn hàng và tổ chức quốc tế.",
      items: [
        {
          title: "Giải Sáng tạo Đột phá",
          org: "Samsung Việt Nam",
          year: "08/2018",
          description:
            "Video quảng cáo Galaxy Note quay 100% bằng điện thoại — giành \"Giải thưởng Video Sáng tạo Đột phá nhất\" do Ban lãnh đạo Samsung trực tiếp trao tặng.",
        },
        {
          title: "Giải Xuất sắc Quốc gia",
          org: "Mentos",
          year: "08/2017",
          description:
            "Giải Nhất toàn quốc chiến dịch \"Phá Băng Khoảng Cách\" — từ hoạch định concept đến thực thi toàn bộ chuỗi sản xuất.",
        },
        {
          title: "Top 1 Tương tác toàn hệ thống",
          org: "Tiger Beer",
          year: "03/2019",
          description:
            "Dẫn đầu chỉ số Engagement trong chiến dịch \"Hey Rio Đánh Thức Bản Lĩnh\".",
        },
        {
          title: "Top 1 Lan truyền",
          org: "TH True Milk",
          year: "10/2017",
          description:
            "Hơn 200.000 lượt xem tự nhiên — vượt qua hàng loạt nhà sáng tạo khác để dẫn đầu bình chọn.",
        },
        {
          title: "Video Truyền thông Xuất sắc nhất",
          org: "AMD Global",
          year: "2019",
          description:
            "Giữ vai trò Giám đốc Sáng tạo cho chiến dịch ra mắt dòng sản phẩm PC/Chipset thế hệ mới.",
        },
        {
          title: "Đại diện Nền tảng Toàn cầu",
          org: "Google Adventure",
          year: "2018",
          description:
            "1 trong 5 kênh sáng tạo nội dung tiêu biểu đại diện Việt Nam quảng bá du lịch & văn hóa trên bản đồ số thế giới.",
        },
        {
          title: "Huy chương Bạc Quốc gia",
          org: "MCV Network",
          year: "2019",
          description:
            "Biến giải đấu thể thao đường phố \"Đấu Trường Đường Phố\" thành một chiến dịch kể chuyện thương hiệu (Brand Storytelling) đỉnh cao.",
        },
        {
          title: "Gương mặt Truyền hình Đại chúng",
          org: "VTV3",
          year: "2018",
          description:
            "Khách mời chuyên môn & MC series tài liệu \"S-Việt Nam\" khung giờ vàng 20h00.",
        },
      ],
    },
    portfolio: {
      label: "Dự án tiêu biểu",
      heading: "Case-study từ những chiến dịch triệu view",
      sub: "Chọn lọc các dự án đa nền tảng, quy hoạch nội dung và chiến dịch thương hiệu tiêu biểu nhất.",
      viewCase: "Xem chi tiết",
      brandsLabel: "Thương hiệu đã đồng hành",
      items: [
        {
          id: "techcombank",
          brand: "Techcombank",
          title: "Tài sản thị giác cho chiến dịch trọng điểm",
          tag: "Đa nền tảng · Brand Partnership",
          year: "2023",
          description:
            "Trực tiếp làm việc cùng Tổng đạo diễn Việt Tú, cung cấp \"Tài sản thị giác\" độc quyền cho chiến dịch flagship — biến màn trình diễn Parkour mạo hiểm thành một kiệt tác thị giác bùng nổ, định vị tinh thần \"Bước nhảy vọt\" của định chế tài chính hàng đầu.",
          metric: "Đối tác thị giác độc quyền",
        },
        {
          id: "nike",
          brand: "Nike",
          title: "Đối tác Trình diễn Tiêu điểm",
          tag: "Kích hoạt Thương hiệu · Sự kiện",
          year: "2019–2022",
          description:
            "Thiết kế bài diễn và trực tiếp thực thi các kỹ thuật Parkour mạo hiểm tại sự kiện kích hoạt thương hiệu của Nike — tạo tâm điểm thu hút thị giác, truyền tải chân thực tinh thần thể thao bứt phá đến cộng đồng.",
          metric: "Key Performance Partner",
        },
        {
          id: "samsung",
          brand: "Samsung",
          title: "Galaxy Note — Chiến dịch quay 100% bằng điện thoại",
          tag: "Sáng tạo Nội dung · Đạt giải",
          year: "2018",
          description:
            "Chỉ đạo toàn bộ sản xuất chiến dịch quảng cáo Galaxy Note, thực hiện hoàn toàn bằng thiết bị di động — một hướng tiếp cận đột phá được Ban lãnh đạo Samsung Việt Nam vinh danh \"Video Sáng tạo Đột phá nhất\".",
          metric: "Giải thưởng cấp Ban lãnh đạo",
        },
        {
          id: "mentos",
          brand: "Mentos",
          title: "\"Phá Băng Khoảng Cách\"",
          tag: "Quy hoạch Nội dung · Toàn quốc",
          year: "2017",
          description:
            "Từ khâu hoạch định concept chiến lược đến tổng chỉ huy toàn bộ chuỗi sản xuất thực chiến — đạo diễn, quay phim, hậu kỳ. Chiến dịch giành Giải Xuất sắc Quốc gia và tạo sức hút truyền thông mạnh mẽ trên toàn hệ thống.",
          metric: "Giải Xuất sắc Quốc gia",
        },
        {
          id: "challengeme",
          brand: "Challenge Me",
          title: "Kiến tạo Hệ sinh thái Zero-to-One",
          tag: "Quy hoạch Hệ sinh thái · Tăng trưởng",
          year: "2016–2026",
          description:
            "Đồng hành từ mốc 6.000 người đăng ký, xây dựng hệ sinh thái nội dung mảng Khám phá/Trải nghiệm lớn nhất Việt Nam — mở rộng đồng thời mạng lưới YouTube, Facebook và mảng kinh doanh bán lẻ.",
          metric: "4,6 triệu subscriber · 3,6 tỷ views",
        },
        {
          id: "denamhon",
          brand: "Đèn Âm Hồn – Bà Đừng Buồn Con",
          title: "Chiến dịch Truyền thông cho Dự án Điện ảnh",
          tag: "Điện ảnh · Đa nền tảng",
          year: "2025–2026",
          description:
            "Trực tiếp thiết kế và lập kế hoạch Tiếp thị Tích hợp, quy hoạch hệ thống nội dung vệ tinh đa nền tảng đạt mức phủ sóng 200 triệu lượt xem/tháng — đóng góp trực tiếp vào hiệu suất phòng vé của dự án.",
          metric: "105 tỷ VNĐ / 10 ngày khởi chiếu",
        },
      ],
    },
    brands: [
      "Techcombank",
      "Nike",
      "Samsung",
      "Redbull",
      "Vingroup",
      "Mentos",
      "Tiger Beer",
      "TH True Milk",
      "Biti's",
      "AMD",
      "Google · YouTube",
      "VTV3",
    ],
    contact: {
      label: "Liên hệ",
      heading: "Cùng kiến tạo hệ sinh thái nội dung tiếp theo",
      sub: "Đang tìm kiếm đối tác chiến lược cho một dự án truyền thông, một hệ sinh thái Creators, hay một chiến dịch cần dấu ấn sáng tạo? Hãy để lại lời nhắn.",
      formName: "Họ và tên",
      formEmail: "Email liên hệ",
      formSubject: "Chủ đề hợp tác",
      formMessage: "Nội dung trao đổi",
      formSubmit: "Gửi lời nhắn",
      formSending: "Đang gửi...",
      formSuccess: "Cảm ơn anh/chị! Tin nhắn đã được gửi, tôi sẽ phản hồi sớm nhất.",
      formError: "Có lỗi xảy ra, vui lòng thử lại hoặc liên hệ trực tiếp qua email.",
      directLabel: "Liên hệ trực tiếp",
      email: "liamnguyen.hn@gmail.com",
      phone: "+84 888 26 2323",
      location: "Hà Nội, Việt Nam",
      socialLabel: "Mạng xã hội",
    },
    footer: {
      rights: "Bảo lưu mọi quyền.",
      back: "Về đầu trang",
    },
  },
  en: {
    nav: {
      about: "About",
      journey: "Journey",
      awards: "Awards",
      work: "Work",
      contact: "Contact",
      cta: "Let's talk",
    },
    hero: {
      eyebrow: "Content Strategy & Creator Network Consultant",
      name: "HOANG NGUYEN",
      roleLine1: "Building content ecosystems",
      roleLine2: "from zero to billions of views.",
      pitch:
        "A content strategy consultant and creator-network builder with 11 years spent founding, monetizing, and scaling digital ecosystems — from Vietnam's largest street-sports community to million-dollar campaigns for Techcombank, Nike, and Samsung.",
      ctaPrimary: "View selected work",
      ctaSecondary: "Start a conversation",
      credential: "Director of Communications & Partnerships",
      scrollHint: "Scroll to explore",
    },
    stats: [
      { value: "11+", label: "Years in executive strategy" },
      { value: "3M+", label: "Cross-platform followers" },
      { value: "2B+", label: "Cumulative views" },
      { value: "$4.2M+", label: "Box office in 10 days" },
      { value: "20+", label: "Major brand partners" },
    ],
    summary: {
      label: "About",
      heading: "Turning audience insight into a strategic lever for brands",
      body: "I'm an executive strategist with 11 years spent founding and scaling digital ecosystems — building community-first ventures from zero. My leadership is grounded in applying science, technology and digital transformation to turn private-sector execution speed into lasting value.",
      highlights: [
        {
          title: "Zero-to-One",
          body: "Founded and commercialized content ecosystems from scratch — Highnoy, Challenge Me, METUB Creators.",
        },
        {
          title: "Strategic Partnership Management",
          body: "Connected networks of hundreds of creators and brands, optimizing resources into high-impact projects.",
        },
        {
          title: "Cross-functional Leadership",
          body: "From Partner Manager to Head of Creators, from visual director to Communications Director on a nine-figure film release.",
        },
      ],
    },
    moments: {
      label: "Moments",
      heading: "Marks made in the real world",
      sub: "From global platform headquarters to national KOL and digital-transformation forums.",
      items: [
        {
          src: "/images/moments/google.jpg",
          caption: "At Google's headquarters — part of representing Vietnam in the Google Adventure program",
        },
        {
          src: "/images/moments/candid.jpg",
          caption: "KOL Conference — launch of the Hanoi Digital Trust Club, with Hanoi Police & VCCorp",
        },
        {
          src: "/images/moments/kol-event.jpg",
          caption: "\"The Nation's Rising Era\" forum",
        },
        {
          src: "/images/moments/award-event.jpg",
          caption: "Recognized at national KOL & digital-transformation forums",
        },
      ],
    },
    timeline: {
      label: "Career Journey",
      heading: "11 years, three ecosystems, one continuous growth arc",
      sub: "From founding a street-sports community to leading communications strategy for nine-figure entertainment projects.",
      items: [
        {
          period: "Feb 2025 — Feb 2026",
          title: "Multi-Channel Communications Director",
          org: "Challenge Me Entertainment",
          tag: "Film",
          bullets: [
            "Designed the integrated marketing strategy for the feature film \"Đèn Âm Hồn – Bà Đừng Buồn Con.\"",
            "Planned a cross-platform satellite content system reaching 200M views per month.",
            "Directly contributed to a box office result of over 105B VND (~$4.2M) within 10 days of release.",
          ],
        },
        {
          period: "Jan 2023 — Jan 2025",
          title: "Head of METUB Creators",
          org: "METUB Vietnam",
          tag: "Executive Leadership",
          bullets: [
            "Proactively pitched and secured leadership approval for the new \"METUB Creators\" business line.",
            "Led the shift from a \"partner management\" model to \"owning & monetizing digital assets.\"",
            "Led a production house of nearly 800 videos; grew the brand channel to 75M views and 80K+ organic subscribers.",
          ],
        },
        {
          period: "May 2021 — Dec 2022",
          title: "Senior Partner Manager",
          org: "METUB Vietnam",
          tag: "Partner Management",
          bullets: [
            "Managed performance of a portfolio of ~200 partner YouTube channels, sustaining $35K/month in revenue.",
            "Provided senior strategic consulting for IPs including singer Trần Tùng Anh, Tailor Veston, and Xuân Bắc Official.",
          ],
        },
        {
          period: "May 2020 — Apr 2021",
          title: "Partner Manager",
          org: "METUB Vietnam",
          tag: "Partner Management",
          bullets: [
            "Directed cross-category content growth for ~100 partner creators, generating $15–20K/month in revenue.",
            "Recognized as Top 3 nationwide performer (2020–2021).",
          ],
        },
        {
          period: "Aug 2017 — Apr 2020",
          title: "Independent Creative & Media Partner",
          org: "Content Creator",
          tag: "Content Production",
          bullets: [
            "Directed ideation, scripting and production of viral campaigns for Samsung, Mentos, TH True Milk, and Tiger Beer.",
            "Featured expert and host on VTV3's primetime documentary series \"S-Việt Nam.\"",
          ],
        },
        {
          period: "Jun 2016 — Present",
          title: "Growth & Commercial Lead",
          org: "Challenge Me — \"Challenge Me\"",
          tag: "Zero-to-One",
          bullets: [
            "Joined at 6,000 subscribers, shaping the channel's core content and strategy.",
            "Scaled the ecosystem to 4.6M YouTube subscribers + 4M Facebook followers, 3.6B+ views system-wide.",
            "10-year cumulative revenue of ~$3.5M; retail line generated 300M VND in its first month alone.",
          ],
        },
        {
          period: "Jan 2015 — Present",
          title: "Founder & Executive Director",
          org: "Highnoy — Street Sports Ecosystem",
          tag: "Zero-to-One",
          bullets: [
            "Pioneered Vietnam's largest Parkour community from zero — now 3M+ cross-platform followers.",
            "Turned the community into an exclusive strategic marketing channel for Techcombank, Nike, Redbull, Vingroup, and Biti's.",
            "Nearly 2B cumulative views as of 2026.",
          ],
        },
      ],
    },
    awards: {
      label: "Achievements & Awards",
      heading: "Recognized for breakthrough campaigns",
      sub: "Creative content awards granted directly by global and national brands.",
      items: [
        {
          title: "Breakthrough Creative Award",
          org: "Samsung Vietnam",
          year: "Aug 2018",
          description:
            "A Galaxy Note ad shot 100% on mobile phones — won \"Most Breakthrough Creative Video\" presented directly by Samsung Vietnam's leadership.",
        },
        {
          title: "National Excellence Award",
          org: "Mentos",
          year: "Aug 2017",
          description:
            "National first place for the \"Breaking the Distance\" campaign — from concept strategy through full production.",
        },
        {
          title: "#1 Engagement System-wide",
          org: "Tiger Beer",
          year: "Mar 2019",
          description: "Led engagement metrics for the \"Hey Rio, Awaken Your Bravery\" campaign.",
        },
        {
          title: "#1 Organic Reach",
          org: "TH True Milk",
          year: "Oct 2017",
          description: "200,000+ organic views — outperformed a large field of creators to top the voting.",
        },
        {
          title: "Best Communications Video",
          org: "AMD Global",
          year: "2019",
          description: "Served as Creative Director for the launch campaign of AMD's next-gen PC/chipset line.",
        },
        {
          title: "Global Platform Representative",
          org: "Google Adventure",
          year: "2018",
          description: "1 of 5 creator channels representing Vietnam to showcase tourism and culture globally.",
        },
        {
          title: "National Silver Medal",
          org: "MCV Network",
          year: "2019",
          description:
            "Turned the \"Street Arena\" sports tournament into a top-tier brand storytelling campaign.",
        },
        {
          title: "Public TV Personality",
          org: "VTV3",
          year: "2018",
          description: "Featured expert and host on the primetime documentary series \"S-Việt Nam.\"",
        },
      ],
    },
    portfolio: {
      label: "Selected Work",
      heading: "Case studies from million-view campaigns",
      sub: "A curated selection of cross-platform, ecosystem-planning and brand-defining campaigns.",
      viewCase: "View details",
      brandsLabel: "Brands I've worked with",
      items: [
        {
          id: "techcombank",
          brand: "Techcombank",
          title: "Visual Asset for a Flagship Campaign",
          tag: "Cross-platform · Brand Partnership",
          year: "2023",
          description:
            "Worked directly with lead director Việt Tú to deliver the exclusive \"visual asset\" for a flagship campaign — turning a high-risk Parkour performance into a striking visual centerpiece that captured the bank's \"leap forward\" spirit.",
          metric: "Exclusive visual partner",
        },
        {
          id: "nike",
          brand: "Nike",
          title: "Key Performance Partner",
          tag: "Brand Activation · Live Event",
          year: "2019–2022",
          description:
            "Designed and personally performed high-risk Parkour routines at a Nike brand activation — creating a visual centerpiece that authentically conveyed the brand's breakthrough athletic spirit.",
          metric: "Key Performance Partner",
        },
        {
          id: "samsung",
          brand: "Samsung",
          title: "Galaxy Note — Shot 100% on Mobile",
          tag: "Content Creative · Award-winning",
          year: "2018",
          description:
            "Directed full production of a Galaxy Note ad campaign, shot entirely on mobile devices — a breakthrough approach recognized by Samsung Vietnam's leadership as \"Most Breakthrough Creative Video.\"",
          metric: "Executive-level award",
        },
        {
          id: "mentos",
          brand: "Mentos",
          title: "\"Breaking the Distance\"",
          tag: "Content Planning · National",
          year: "2017",
          description:
            "From strategic concept to commanding the entire production chain — direction, filming, post-production. The campaign won the National Excellence Award and drove system-wide reach.",
          metric: "National Excellence Award",
        },
        {
          id: "challengeme",
          brand: "Challenge Me",
          title: "Building a Zero-to-One Ecosystem",
          tag: "Ecosystem Planning · Growth",
          year: "2016–2026",
          description:
            "Joined at 6,000 subscribers and helped build Vietnam's largest exploration/experience content ecosystem — scaling YouTube, Facebook, and a retail merchandise line in parallel.",
          metric: "4.6M subscribers · 3.6B views",
        },
        {
          id: "denamhon",
          brand: "Đèn Âm Hồn – Bà Đừng Buồn Con",
          title: "Communications Campaign for a Feature Film",
          tag: "Film · Cross-platform",
          year: "2025–2026",
          description:
            "Designed and planned integrated marketing, orchestrating a cross-platform satellite content system reaching 200M views per month — directly contributing to the film's box office performance.",
          metric: "$4.2M+ box office / 10 days",
        },
      ],
    },
    brands: [
      "Techcombank",
      "Nike",
      "Samsung",
      "Redbull",
      "Vingroup",
      "Mentos",
      "Tiger Beer",
      "TH True Milk",
      "Biti's",
      "AMD",
      "Google · YouTube",
      "VTV3",
    ],
    contact: {
      label: "Contact",
      heading: "Let's build the next content ecosystem together",
      sub: "Looking for a strategic partner for a media project, a creator ecosystem, or a campaign that needs a distinctive creative signature? Send a message.",
      formName: "Full name",
      formEmail: "Email address",
      formSubject: "Subject",
      formMessage: "Message",
      formSubmit: "Send message",
      formSending: "Sending...",
      formSuccess: "Thank you! Your message has been sent — I'll reply as soon as possible.",
      formError: "Something went wrong. Please try again or reach out directly via email.",
      directLabel: "Direct contact",
      email: "liamnguyen.hn@gmail.com",
      phone: "+84 888 26 2323",
      location: "Hanoi, Vietnam",
      socialLabel: "Social",
    },
    footer: {
      rights: "All rights reserved.",
      back: "Back to top",
    },
  },
};
