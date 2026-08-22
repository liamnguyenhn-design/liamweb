export type BrandLogo = { name: string; logo: string };

export type Capability = {
  number: string;
  title: string;
  body: string;
  image?: string;
  images?: string[];
};

export type WhyMeFacet = {
  title: string;
  body: string;
};

export type TimelineEra = {
  period: string;
  era: string;
  title: string;
  org: string;
  bullets: string[];
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

export type CaseStudy = {
  id: string;
  brand: string;
  logo?: string;
  cover?: string;
  title: string;
  tag: string;
  year: string;
  problem: string;
  perspective: string;
  solution: string;
  execution: string;
  result: string;
  stages: string[];
};

export type BrandCampaign = {
  id: string;
  brand: string;
  logo?: string;
  year: string;
  description: string;
  proof: string;
};

export type FeaturedCase = {
  eyebrow: string;
  brand: string;
  title: string;
  metric: string;
  intro: string[];
  roleLabel: string;
  roles: { title: string; body: string }[];
  resultsLabel: string;
  results: { value: string; label: string }[];
  scaleLabel?: string;
  scaleIntro?: string;
  scale?: { value: string; label: string }[];
  keyLabel?: string;
  keyMessage?: string;
  cover?: string;
  avatar?: string;
};

export type LangContent = {
  nav: {
    home: string;
    whoAmI: string;
    capabilities: string;
    work: string;
    insights: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    headline: string;
    subheadline: string;
    capabilityLine: string;
    ctaPrimary: string;
    ctaSecondary: string;
    subCredentials: string[];
    scrollHint: string;
  };
  aboutIntro: {
    label: string;
    paragraph: string;
    paragraphMore: string;
    readMore: string;
    readLess: string;
    pressLabel: string;
    press: { outlet: string; title: string; url: string }[];
    images: string[];
    imageCaption: string;
    imageCaptionUrl: string;
    imageCaptionLinkLabel: string;
  };
  stats: Stat[];
  trustedBy: { label: string; note: string; items: BrandLogo[] };
  showreel: {
    label: string;
    title: string;
    tag: string;
    description: string;
    creditsLabel: string;
    credits: { role: string; names: string }[];
    hashtags: string;
    play: string;
  };
  problem: {
    label: string;
    heading: string;
    sub: string;
    points: string[];
    keyMessage: string[];
  };
  capabilities: {
    label: string;
    heading: string;
    sub: string;
    flow: string;
    items: Capability[];
  };
  whyMe: {
    label: string;
    heading: string;
    sub: string;
    facets: WhyMeFacet[];
    keyMessage: string;
  };
  journey: {
    label: string;
    heading: string;
    sub: string;
    items: TimelineEra[];
  };
  caseStudies: {
    label: string;
    heading: string;
    sub: string;
    otherCasesLabel: string;
    items: CaseStudy[];
    campaignsHeading: string;
    campaigns: BrandCampaign[];
    stageLabel: string;
    viewCase: string;
  };
  featuredCases: FeaturedCase[];
  awards: { label: string; heading: string; sub: string; items: Award[] };
  moments: {
    label: string;
    heading: string;
    sub: string;
    items: string[];
  };
  whoIWorkWith: {
    label: string;
    heading: string;
    items: { title: string; body: string }[];
  };
  workWithMe: {
    label: string;
    heading: string;
    items: { number: string; title: string; body: string }[];
  };
  finalCta: {
    heading: string;
    options: string[];
    cta: string;
  };
  contact: {
    label: string;
    heading: string;
    sub: string;
    formName: string;
    formCompany: string;
    formProjectType: string;
    formProjectTypeOptions: string[];
    formProblem: string;
    formTimeline: string;
    formTimelineOptions: string[];
    formContactInfo: string;
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
      home: "Trang chủ",
      whoAmI: "Tôi là ai",
      capabilities: "Tôi có thể giúp gì",
      work: "Dự án",
      insights: "Góc nhìn",
      contact: "Liên hệ",
      cta: "Trao đổi với tôi",
    },
    hero: {
      eyebrow: "Chuyên gia Tư vấn & Đối tác Chiến lược Phát triển Nội dung Đa nền tảng",
      name: "HOÀNG NGUYỄN",
      headline: "Kiến tạo và chuẩn hóa hệ sinh thái nội dung đa kênh cho doanh nghiệp từ giai đoạn khởi tạo.",
      subheadline:
        "Tôi trực tiếp đồng hành cùng doanh nghiệp định hình bản sắc thương hiệu, hoạch định chiến lược nội dung dài hạn và tối ưu hóa nguồn lực thực thi. Với lộ trình bài bản, tôi chuyển hóa mọi ý tưởng sơ khởi thành các kênh truyền thông có định vị sắc nét, vận hành bền vững và sở hữu năng lực tăng trưởng vượt trội trên mọi nền tảng số.",
      capabilityLine: "ĐỊNH HƯỚNG · NỘI DUNG · CREATOR · SẢN XUẤT · ĐA NỀN TẢNG · TỐI ƯU",
      ctaPrimary: "Tôi có thể giúp gì?",
      ctaSecondary: "Trao đổi về dự án",
      subCredentials: [
        "Phó Chủ tịch mạng lưới khởi nghiệp, đổi mới sáng tạo và chuyển đổi số Thủ Đô",
        "Co-founder & Admin - Highnoy Group Parkour Việt Nam",
      ],
      scrollHint: "Cuộn để khám phá",
    },
    aboutIntro: {
      label: "Về tôi",
      paragraph:
        "Từ một cậu sinh viên Bách Khoa mê Parkour trên đường phố Hà Nội đến Cố vấn Độc lập đồng hành cùng các thương hiệu và kênh nội dung — hành trình 12 năm của tôi đi qua Highnoy, METUB Network và Metub Creators, được Thanh Niên, Đẹp, VTV và nhiều báo đài ghi nhận.",
      paragraphMore:
        "Tôi cùng xây dựng Highnoy — nhóm Parkour tại Hà Nội có sức ảnh hưởng trên khắp cả nước, sở hữu kênh YouTube hơn 1,2 triệu người theo dõi và hệ thống kênh thành viên đạt hơn 4 triệu người theo dõi, hơn 2 tỷ lượt xem. Tôi bước sang một hành trình khác tại METUB Network — nơi tôi tiếp tục sự nghiệp định hướng và sáng tạo nội dung, trực tiếp quản lý kênh và định hướng cho gần 200 creator, KOL, KOC, nghệ sĩ... METUB là một trong những công ty dẫn đầu về mảng giải trí và truyền thông số tại Việt Nam, khởi nguồn từ một đơn vị trực thuộc Mạng lưới đa kênh của YouTube (YouTube MCN), hỗ trợ các cá nhân và tổ chức sản xuất, phát hành, tối ưu và thương mại hóa nội dung — hiện sở hữu hàng ngàn kênh với hàng trăm triệu người theo dõi. Là một đại diện của thế hệ content creator Gen Z luôn cháy hết mình với đam mê, tôi sáng lập kênh YouTube Metub Creators — nền tảng lưu trữ kiến thức từ cơ bản đến nâng cao, giúp các nhà sáng tạo \"ôn bài\" và thực hành bất cứ lúc nào.",
      readMore: "Xem thêm",
      readLess: "Thu gọn",
      pressLabel: "Xuất hiện trên báo chí",
      press: [
        {
          outlet: "Thanh Niên",
          title: "9X điển trai từ mê Parkour đến định hướng nội dung sáng tạo YouTube",
          url: "https://thanhnien.vn/9x-dien-trai-tu-me-parkour-den-dinh-huong-noi-dung-sang-tao-youtube-1851032573.htm",
        },
        {
          outlet: "Đẹp",
          title: "Gen Z nên bắt đầu từ đâu nếu muốn sáng tạo nội dung trên YouTube?",
          url: "https://dep.com.vn/gen-z-nen-bat-dau-tu-dau-neu-muon-sang-tao-noi-dung-tren-youtube/",
        },
        {
          outlet: "Hà Nội Online",
          title: "Rèn luyện khả năng tính toán, logic với Parkour",
          url: "https://hanoionline.vn/ren-luyen-kha-nang-tinh-toan-logic-voi-parkour-232635.htm",
        },
        {
          outlet: "VTV",
          title: "S-Việt Nam: Parkour — Bước nhảy đường phố",
          url: "https://vtv.vn/video/s-viet-nam-parkour-buoc-nhay-duong-pho-253641.htm",
        },
        {
          outlet: "Red Bull Vietnam",
          title: "Cộng đồng Parkour Highnoy lan tỏa năng lượng tích cực",
          url: "https://www.redbullvietnam.com/a/nhieu-nghe-si-viet-va-cong-dong-the-thao-thi-nhau-tham-gia-thu-thach-lan-toa-nang-luong-tich-cuc-126",
        },
        {
          outlet: "VietNamNet",
          title: "Parkour: Bộ môn thể thao toàn cầu bắt nguồn sâu sắc từ Việt Nam",
          url: "https://vietnamnet.vn/en/parkour-a-global-sport-deeply-rooted-in-vietnam-654427.html",
        },
        {
          outlet: "Vietnam News",
          title: "Parkour: Bộ môn thể thao toàn cầu bắt nguồn sâu sắc từ Việt Nam",
          url: "https://vietnamnews.vn/sports/749187/parkour-a-global-sport-deeply-rooted-in-viet-nam.html",
        },
      ],
      images: ["/images/about/about-01.png"],
      imageCaption:
        "Khoảnh khắc tôi trực tiếp host series \"Metub Creators — Podcast\" — kênh YouTube do chính tôi sáng lập.",
      imageCaptionUrl: "https://www.youtube.com/watch?v=hnC7XVQsOPU",
      imageCaptionLinkLabel: "Xem podcast",
    },
    stats: [
      { value: "12+", label: "Năm kinh nghiệm" },
      { value: "3M+", label: "Followers đa nền tảng" },
      { value: "2B+", label: "Lượt xem tích lũy" },
      { value: "200M+", label: "Lượt xem chiến dịch / tháng" },
      { value: "20+", label: "Thương hiệu lớn" },
    ],
    trustedBy: {
      label: "Đối tác đã đồng hành",
      note: "Cùng nhiều thương hiệu và tổ chức khác",
      items: [
        { name: "Techcombank", logo: "/logos/techcombank.png" },
        { name: "Nike", logo: "/logos/nike.svg" },
        { name: "Samsung", logo: "/logos/samsung.svg" },
        { name: "Mentos", logo: "/logos/mentos.svg" },
        { name: "Tiger Beer", logo: "/logos/tiger-beer.png" },
        { name: "TH True Milk", logo: "/logos/th-true-milk.svg" },
        { name: "Vingroup", logo: "/logos/vingroup.svg" },
        { name: "Biti's", logo: "/logos/bitis.svg" },
        { name: "Google", logo: "/logos/google.svg" },
        { name: "Adidas", logo: "/logos/adidas.svg" },
        { name: "Thăng Long Cars", logo: "/logos/thang-long-cars.svg" },
      ],
    },
    showreel: {
      label: "Showreel",
      title: "Biti's Hunter × Highnoy",
      tag: "Run Your Way",
      description:
        "Đảm nhiệm vai trò Production Manager cho chiến dịch Biti's Hunter Core x Highnoy — nơi tinh thần bứt phá của thương hiệu giày Việt gặp nhịp chuyển động tự do của văn hóa đường phố. Be Cool. Be Hunter.",
      creditsLabel: "Credits",
      credits: [
        { role: "Production Manager", names: "Hoàng Nguyễn" },
        { role: "Athletes", names: "Phạm Xuân Lâm, Chương Nguyễn, Huy Văn, Tài Hiếu" },
        { role: "Camera Operators", names: "Lê Minh, Trần Ngọc Minh" },
        { role: "Drone Operator", names: "Nguyễn Quang Thành" },
        { role: "Production Crew", names: "Lưu Trung Hiếu, Đào Đức Hiếu, Tút Sờ Tích" },
      ],
      hashtags: "#BitisHunter #Highnoy #BeCoolBeHunter",
      play: "Xem video",
    },
    problem: {
      label: "Bài toán thường gặp",
      heading: "Bạn đang muốn xây một kênh nội dung?",
      sub: "Nhưng chưa biết bắt đầu từ đâu?",
      points: [
        "Có thương hiệu nhưng chưa biết xây kênh như thế nào.",
        "Có sản phẩm nhưng chưa biết nên kể câu chuyện gì.",
        "Có rất nhiều ý tưởng nhưng chưa có hệ thống nội dung.",
        "Có nhiều nền tảng nhưng mỗi nơi đang làm một kiểu.",
        "Muốn sử dụng Creator nhưng chưa biết tìm và kết nối ai.",
        "Muốn sản xuất video nhưng chưa có quy trình từ ý tưởng đến thành phẩm.",
        "Có nội dung nhưng chưa biết cách phát triển đa nền tảng.",
        "Đã đăng tải nhưng chưa có hệ thống theo dõi và tối ưu.",
      ],
      keyMessage: ["Bạn không nhất thiết cần thêm content.", "Bạn cần một hệ thống."],
    },
    capabilities: {
      label: "Năng lực cốt lõi",
      heading: "Từ định hướng đến tăng trưởng",
      sub: "Một kênh nội dung tốt không bắt đầu từ việc đăng video. Nó bắt đầu từ việc biết mình đang xây gì, cho ai và vì sao.",
      flow: "01 Định hướng → 02 Nội dung → 03 Creator → 04 Sản xuất → 05 Hậu kỳ → 06 Phân phối → 07 Tối ưu",
      items: [
        {
          number: "01",
          title: "Định hướng",
          body: "Xác định đang xây kênh gì, cho ai, và định vị ra sao trước khi sản xuất.",
        },
        {
          number: "02",
          title: "Nội dung",
          body: "Biến định hướng thành chủ đề, format, series và kịch bản cụ thể.",
        },
        {
          number: "03",
          title: "Creator",
          body: "Kết nối đúng Creator, KOL, KOC để khuếch đại đúng thông điệp.",
        },
        {
          number: "04",
          title: "Sản xuất",
          body: "Đưa ý tưởng vào thực tế: quay, dựng, đóng gói đúng định hướng.",
        },
        {
          number: "05",
          title: "Hậu kỳ",
          body: "Hoàn thiện nội dung, tối ưu hook, nhịp và phiên bản cho từng nền tảng.",
        },
        {
          number: "06",
          title: "Phân phối",
          body: "Đưa đúng nội dung đến đúng nền tảng, đúng khán giả.",
        },
        {
          number: "07",
          title: "Tối ưu",
          body: "Theo dõi hiệu quả và liên tục điều chỉnh để tăng trưởng bền vững.",
        },
      ],
    },
    whyMe: {
      label: "Tại sao là tôi",
      heading: "Tại sao tôi có thể làm được điều này?",
      sub: "Không chỉ khoe thành tích — mà là năng lực được tích lũy qua từng vai trò thực tế.",
      facets: [
        {
          title: "Creator",
          body: "Tôi từng trực tiếp tạo nội dung và xây cộng đồng — từ những video Parkour đầu tiên của Highnoy.",
        },
        {
          title: "Builder",
          body: "Tôi từng xây Highnoy, Challenge Me và METUB Creators từ những giai đoạn rất sớm, khi chưa có công thức có sẵn.",
        },
        {
          title: "Operator",
          body: "Tôi từng vận hành mạng lưới Creator, gần 200 kênh YouTube đối tác và một production house gần 800 video tại METUB.",
        },
        {
          title: "Strategist",
          body: "Tôi từng tư vấn chiến lược nội dung đa kênh cho các thương hiệu và hệ thống như Thăng Long Cars.",
        },
        {
          title: "Connector",
          body: "Tôi có khả năng kết nối Creator, KOL, KOC, Influencer, thương hiệu, ekip sản xuất và các nguồn lực cần thiết để biến chiến lược thành thực tế.",
        },
      ],
      keyMessage: "Tôi không chỉ hiểu một mắt xích. Tôi hiểu cách các mắt xích kết nối với nhau.",
    },
    journey: {
      label: "Hành trình sự nghiệp",
      heading: "12 năm — từ Creator đến Content Ecosystem Partner",
      sub: "Từ người sáng lập một cộng đồng thể thao đường phố đến vị trí tư vấn chiến lược nội dung đa kênh.",
      items: [
        {
          period: "2025 — 2026",
          era: "ECOSYSTEM → STRATEGY",
          title: "Cố vấn Độc lập — Phát triển Nội dung Đa nền tảng",
          org: "Tư vấn Độc lập",
          bullets: [
            "Tham mưu định hướng nội dung và kiến trúc kênh cho Thăng Long Cars — đồng hành mở rộng hệ thống lên 8 kênh, đạt hơn 3 triệu lượt xem/tháng.",
            "Song song đồng hành cùng ê-kíp truyền thông cho dự án điện ảnh \"Đèn Âm Hồn – Bà Đừng Buồn Con\" tại Challenge Me Entertainment — tham gia định hướng và điều phối hệ thống nội dung vệ tinh đa nền tảng đạt 200 triệu lượt xem/tháng.",
          ],
        },
        {
          period: "2020 — 2025",
          era: "CREATOR → NETWORK → OPERATION",
          title: "Từ Partner Manager đến Head of METUB Creators",
          org: "METUB Việt Nam",
          bullets: [
            "Hoạch định và thuyết phục Ban lãnh đạo phê duyệt dự án kinh doanh mới \"METUB Creators\" — dịch chuyển mô hình từ quản lý đối tác sang sở hữu và khai thác tài sản số.",
            "Lãnh đạo production house gần 800 video, kênh thương hiệu đạt 75 triệu lượt xem, 80.000+ subscriber tự nhiên.",
            "Quản trị danh mục gần 200 kênh YouTube đối tác, sau đó định hướng phát triển nội dung cho gần 100 nhà sáng tạo — vinh danh Top 3 nhân sự xuất sắc nhất toàn quốc (2020–2021).",
          ],
        },
        {
          period: "2017 — 2020",
          era: "CONTENT → CAMPAIGN",
          title: "Chuyên gia Sáng tạo & Đối tác Truyền thông Độc lập",
          org: "Content Creator",
          bullets: [
            "Chỉ đạo toàn bộ ý tưởng, kịch bản và sản xuất chiến dịch viral cho Samsung, Mentos, TH True Milk và Tiger Beer.",
            "Chuyên gia trải nghiệm & MC series tài liệu \"S-Việt Nam\" trên sóng VTV3 khung giờ vàng.",
          ],
        },
        {
          period: "2016 — Hiện tại",
          era: "BUILD → SCALE",
          title: "Trưởng nhóm Phát triển nội dung",
          org: "Challenge Me – \"Hãy Thách Thức Tôi\"",
          bullets: [
            "Gia nhập từ mốc 6.000 người đăng ký, định hình kịch bản và chiến lược nội dung cốt lõi.",
            "Đưa hệ sinh thái lên 4,6 triệu subscriber YouTube + 4 triệu follow Facebook, hơn 3,6 tỷ lượt xem toàn hệ thống.",
            "Đồng hành cùng kênh trong suốt 10 năm phát triển bền vững, mở rộng thành công sang mảng kinh doanh bán lẻ ngay từ tháng đầu ra mắt.",
          ],
        },
        {
          period: "2015 — Hiện tại",
          era: "ZERO → ONE",
          title: "Nhà sáng lập & Giám đốc Điều hành",
          org: "Highnoy — Hệ sinh thái Thể thao Đường phố",
          bullets: [
            "Tiên phong kiến tạo cộng đồng Parkour lớn nhất Việt Nam từ con số 0 — cán mốc 3 triệu followers đa nền tảng.",
            "Chuyển hóa cộng đồng thành phễu tiếp thị chiến lược độc quyền cho Techcombank, Nike, Redbull, Vingroup, Biti's.",
            "Gần 2 tỷ lượt xem tích lũy tính đến 2026.",
          ],
        },
      ],
    },
    caseStudies: {
      label: "Case Study",
      heading: "Những bài toán tôi đã đồng hành",
      sub: "Mỗi dự án đều đi qua cùng một cấu trúc: bài toán → góc nhìn → giải pháp → triển khai → kết quả.",
      otherCasesLabel: "Case Study khác",
      stageLabel: "Các mắt xích đã tham gia",
      viewCase: "Xem chi tiết",
      items: [
        {
          id: "thanglongcars",
          brand: "Thăng Long Cars",
          cover: "/images/portfolio/thang-long-cars.jpg",
          title: "Tư vấn Tăng trưởng Hệ thống Nội dung",
          tag: "Tư vấn Độc lập · Đa kênh",
          year: "2025 — Hiện tại",
          problem:
            "Đã có hệ thống nội dung nhưng chưa có kiến trúc kênh rõ ràng và định hướng phát triển dài hạn đa kênh.",
          perspective:
            "Cần một kiến trúc kênh rõ ràng trước khi mở rộng quy mô — không phải chỉ sản xuất thêm video.",
          solution:
            "Tư vấn định hướng nội dung và đề xuất kiến trúc kênh, nền tảng phù hợp với hệ sinh thái sản phẩm của Thăng Long Cars.",
          execution:
            "Với vai trò Cố vấn Độc lập, trực tiếp tham mưu xây dựng nội dung đa kênh và tư vấn lựa chọn nền tảng phù hợp; đội ngũ Thăng Long Cars trực tiếp triển khai và vận hành hệ thống.",
          result:
            "8 kênh · hơn 3 triệu lượt xem/tháng — góp phần nâng tầm nhận diện thương hiệu và thúc đẩy trực tiếp doanh số bán xe.",
          stages: ["Định hướng", "Nội dung", "Đa nền tảng", "Theo dõi", "Tối ưu"],
        },
        {
          id: "metubcreators",
          brand: "METUB Creators",
          title: "Xây dựng Hệ sinh thái Creator",
          tag: "Quản trị Điều hành · Creator Network",
          year: "2023 — 2025",
          problem:
            "METUB cần dịch chuyển từ mô hình \"quản lý đối tác\" đơn thuần sang sở hữu và khai thác tài sản số riêng.",
          perspective:
            "Một mạng lưới Creator chỉ tạo giá trị bền vững khi được vận hành như một hệ sinh thái được đầu tư dài hạn, không phải tập hợp các hợp đồng rời rạc.",
          solution:
            "Chủ động hoạch định và thuyết phục Ban lãnh đạo phê duyệt dự án kinh doanh mới \"METUB Creators\".",
          execution:
            "Lãnh đạo production house gần 800 video, trực tiếp định hướng Creator, quản trị mạng lưới và phát triển kênh thương hiệu.",
          result: "Kênh thương hiệu đạt 75 triệu lượt xem, hơn 80.000 subscriber tự nhiên.",
          stages: ["Định hướng", "Creator", "Sản xuất", "Theo dõi"],
        },
        {
          id: "challengeme",
          brand: "Challenge Me",
          title: "Kiến tạo Hệ sinh thái Zero-to-One",
          tag: "Quy hoạch Hệ sinh thái · Tăng trưởng",
          year: "2016 — Hiện tại",
          problem: "Xây một hệ sinh thái nội dung mảng khám phá/trải nghiệm từ con số 0, không có sẵn công thức.",
          perspective:
            "Một kênh nội dung bền vững cần được xây như một hệ sinh thái đa nền tảng ngay từ đầu, không chỉ là một kênh YouTube đơn lẻ.",
          solution: "Định hình kịch bản và chiến lược nội dung cốt lõi ngay từ mốc 6.000 người đăng ký.",
          execution:
            "Mở rộng đồng thời mạng lưới YouTube, Facebook và mảng kinh doanh bán lẻ song song với nội dung.",
          result: "4,6 triệu subscriber YouTube · 4 triệu follow Facebook · hơn 3,6 tỷ lượt xem toàn hệ thống.",
          stages: ["Định hướng", "Nội dung", "Đa nền tảng", "Phát triển"],
        },
        {
          id: "denamhon",
          brand: "Đèn Âm Hồn – Bà Đừng Buồn Con",
          title: "Chiến dịch Truyền thông cho Dự án Điện ảnh",
          tag: "Điện ảnh · Đa nền tảng",
          year: "2025 — 2026",
          problem:
            "Một dự án điện ảnh cần độ phủ truyền thông đa nền tảng để chuyển hóa thành hiệu suất phòng vé thực tế.",
          perspective:
            "Truyền thông phim không dừng ở quảng bá — cần một hệ thống nội dung vệ tinh phối hợp nhịp nhàng giữa các nền tảng.",
          solution: "Tham gia cùng ê-kíp truyền thông, đóng góp định hướng cho chiến lược Tiếp thị Tích hợp và hệ thống nội dung vệ tinh đa nền tảng.",
          execution:
            "Đồng hành cùng ê-kíp trong việc điều phối và phát triển nội dung xuyên suốt các nền tảng.",
          result:
            "Phủ sóng 200 triệu lượt xem/tháng — đóng góp trực tiếp vào thành tích phòng vé ấn tượng trong 10 ngày đầu công chiếu.",
          stages: ["Nội dung", "Đa nền tảng", "Đăng tải", "Theo dõi"],
        },
      ],
      campaignsHeading: "Brand Campaigns",
      campaigns: [
        {
          id: "techcombank",
          brand: "Techcombank",
          logo: "/logos/techcombank.png",
          year: "2023",
          description: "Tài sản thị giác độc quyền cho chiến dịch flagship, phối hợp cùng Tổng đạo diễn Việt Tú.",
          proof: "Đối tác thị giác độc quyền",
        },
        {
          id: "nike",
          brand: "Nike",
          logo: "/logos/nike.svg",
          year: "2019–2022",
          description: "Thiết kế và trực tiếp trình diễn Parkour mạo hiểm tại sự kiện kích hoạt thương hiệu.",
          proof: "Key Performance Partner",
        },
        {
          id: "samsung",
          brand: "Samsung",
          logo: "/logos/samsung.svg",
          year: "2018",
          description: "Chỉ đạo sản xuất chiến dịch Galaxy Note quay 100% bằng điện thoại.",
          proof: "Giải Sáng tạo Đột phá nhất",
        },
        {
          id: "mentos",
          brand: "Mentos",
          logo: "/logos/mentos.svg",
          year: "2017",
          description: "Từ concept đến tổng chỉ huy sản xuất chiến dịch \"Phá Băng Khoảng Cách\".",
          proof: "Giải Xuất sắc Quốc gia",
        },
      ],
    },
    featuredCases: [
      {
        eyebrow: "Case Study 01",
        brand: "Chương Tailor",
        title: "Xây dựng & Tăng trưởng Kênh Nội dung Đa nền tảng",
        metric: "Từ 2.000 → 12.000+ người đăng ký YouTube trong 3 tháng",
        intro: [
          "Chương Tailor có nền tảng thương hiệu tốt nhưng cần một hướng phát triển nội dung rõ ràng hơn trên môi trường số.",
          "Tôi đồng hành trong toàn bộ quá trình từ định hướng → nội dung → sản xuất → quay → hậu kỳ → đăng tải → theo dõi → tối ưu.",
        ],
        roleLabel: "Vai trò",
        roles: [
          { title: "Content Direction", body: "Xác định hướng nội dung, chủ đề và format phù hợp với thương hiệu." },
          { title: "Content Development", body: "Phát triển ý tưởng, series, kịch bản và hệ thống nội dung." },
          { title: "Production", body: "Định hướng và phối hợp quá trình quay, ekip và sản xuất." },
          { title: "Distribution", body: "Phát triển nội dung trên YouTube và các nền tảng khác." },
          { title: "Optimization", body: "Theo dõi dữ liệu, phản hồi và liên tục điều chỉnh nội dung." },
        ],
        resultsLabel: "Kết quả sau 3 tháng",
        results: [
          { value: "+10.000", label: "người đăng ký mới trên YouTube" },
          { value: "500.000+", label: "lượt xem trên YouTube" },
          { value: "1.000.000+", label: "lượt tương tác / tiếp cận trên đa nền tảng" },
        ],
        keyLabel: "Key Takeaway",
        keyMessage: "Không chỉ sản xuất video — xây dựng một hệ thống nội dung có khả năng tăng trưởng.",
        avatar: "/images/case-studies/chuong-tailor-avatar.jpg",
      },
      {
        eyebrow: "Case Study 02",
        brand: "Việt Phương Thoa",
        title: "Tư vấn & Phát triển Short-form Content",
        metric: "80 video · 20M+ lượt xem · 3 tháng",
        intro: [
          "Năm 2021, khi TikTok và short-form video bắt đầu phát triển mạnh tại Việt Nam, tôi đồng hành cùng Việt Phương Thoa trong việc định hướng và phát triển nội dung video ngắn trên nền tảng mới.",
          "Bài toán không chỉ là sản xuất video, mà là tìm ra format, cách kể chuyện và nhịp nội dung phù hợp với hành vi người dùng trên một nền tảng mới.",
        ],
        roleLabel: "Vai trò",
        roles: [
          { title: "Content Direction", body: "Định hướng cách tiếp cận short-form phù hợp với Creator và nền tảng." },
          { title: "Format Development", body: "Thử nghiệm và phát triển các format có khả năng thu hút người xem." },
          { title: "Production", body: "Đồng hành trong quá trình biến ý tưởng thành video thực tế." },
          { title: "Distribution", body: "Xây dựng nhịp đăng tải và phát triển nội dung trên nền tảng." },
          { title: "Optimization", body: "Theo dõi phản hồi và hiệu quả để liên tục điều chỉnh." },
        ],
        resultsLabel: "Kết quả sau 3 tháng",
        results: [
          { value: "80", label: "video short-form được phát triển và đăng tải" },
          { value: "20M+", label: "lượt xem trên TikTok" },
          { value: "3 tháng", label: "thử nghiệm, đo lường và tối ưu" },
        ],
        scaleLabel: "Quy mô hiện tại",
        scaleIntro: "Hành trình phát triển sau đó tiếp tục đưa Việt Phương Thoa trở thành một Creator có quy mô lớn trên nhiều nền tảng.",
        scale: [
          { value: "16M+", label: "followers trên TikTok" },
          { value: "3M+", label: "subscribers trên YouTube" },
          { value: "3M+", label: "lượt thích trên Facebook" },
        ],
        avatar: "/images/case-studies/vpt-avatar.jpg",
      },
    ],
    awards: {
      label: "Thành tựu & Giải thưởng",
      heading: "Những dấu ấn được ghi nhận",
      sub: "Các giải thưởng sáng tạo nội dung được trao bởi chính các nhãn hàng và tổ chức.",
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
          description: "Giải Nhất toàn quốc chiến dịch \"Phá Băng Khoảng Cách\" — từ hoạch định concept đến thực thi toàn bộ chuỗi sản xuất.",
        },
        {
          title: "Top 1 Tương tác toàn hệ thống",
          org: "Tiger Beer",
          year: "03/2019",
          description: "Dẫn đầu chỉ số Engagement trong chiến dịch \"Hey Rio Đánh Thức Bản Lĩnh\".",
        },
        {
          title: "Top 1 Lan truyền",
          org: "TH True Milk",
          year: "10/2017",
          description: "Hơn 200.000 lượt xem tự nhiên — vượt qua hàng loạt nhà sáng tạo khác để dẫn đầu bình chọn.",
        },
        {
          title: "Video Xuất sắc nhất",
          org: "AMD Global",
          year: "2019",
          description: "Tham gia chương trình của AMD cho dòng sản phẩm PC/Chipset thế hệ mới và giành giải Video Xuất sắc nhất.",
        },
        {
          title: "Đại diện Nền tảng Toàn cầu",
          org: "Google Adventure",
          year: "2018",
          description: "1 trong 5 kênh sáng tạo nội dung tiêu biểu đại diện Việt Nam quảng bá du lịch & văn hóa trên bản đồ số thế giới.",
        },
        {
          title: "Huy chương Bạc Quốc gia",
          org: "MCV Network",
          year: "2019",
          description: "Biến giải đấu thể thao đường phố \"Đấu Trường Đường Phố\" thành một chiến dịch kể chuyện thương hiệu đỉnh cao.",
        },
        {
          title: "Gương mặt Truyền hình Đại chúng",
          org: "VTV3",
          year: "2018",
          description: "Khách mời chuyên môn & MC series tài liệu \"S-Việt Nam\" khung giờ vàng 20h00.",
        },
      ],
    },
    moments: {
      label: "Khoảnh khắc",
      heading: "Những khoảnh khắc cùng Nghệ sĩ, Content Creators, KOLs, KOCs...",
      sub: "Trong các sự kiện và chiến dịch đã đồng hành.",
      items: [
        "/images/moments/google.jpg",
        "/images/moments/candid.jpg",
        "/images/moments/award-event.jpg",
        "/images/moments/ballroom.jpg",
        "/images/moments/trophy.jpg",
        "/images/moments/consulting-2.jpg",
        "/images/moments/filmset-1.jpg",
        "/images/moments/filmset-2.jpg",
        "/images/moments/filmset-3.jpg",
        "/images/moments/denamhon-hoangnam.jpg",
        "/images/moments/google-arts-group.jpg",
        "/images/moments/google-arts-solo.jpg",
        "/images/moments/wall/wall-01.jpg",
        "/images/moments/wall/wall-02.jpg",
        "/images/moments/wall/wall-03.jpg",
        "/images/moments/wall/wall-04.jpg",
        "/images/moments/wall/wall-05.jpg",
        "/images/moments/wall/wall-06.jpg",
        "/images/moments/wall/wall-07.jpg",
        "/images/moments/wall/wall-08.jpg",
        "/images/moments/wall/wall-09.jpg",
        "/images/moments/wall/wall-10.jpg",
        "/images/moments/wall/wall-11.jpg",
        "/images/moments/wall/wall-12.jpg",
        "/images/moments/wall/wall-13.jpg",
        "/images/moments/wall/wall-14.jpg",
        "/images/moments/wall/wall-16.jpg",
        "/images/moments/wall/wall-18.jpg",
        "/images/moments/wall/wall-20.jpg",
        "/images/moments/wall/wall-21.jpg",
        "/images/moments/wall/wall-22.jpg",
        "/images/moments/wall/wall-23.jpg",
        "/images/moments/wall/wall-24.jpg",
        "/images/moments/wall/wall-25.jpg",
        "/images/moments/wall/wall-26.jpg",
      ],
    },
    whoIWorkWith: {
      label: "Đối tượng đồng hành",
      heading: "Tôi thường đồng hành với",
      items: [
        { title: "Doanh nghiệp", body: "Muốn xây mới hoặc tái cấu trúc hệ thống nội dung." },
        { title: "Thương hiệu", body: "Muốn phát triển kênh, Content IP hoặc chiến dịch đa nền tảng." },
        { title: "Founder / CEO", body: "Muốn xây thương hiệu cá nhân và tiếng nói riêng." },
        {
          title: "Đội ngũ Marketing",
          body: "Cần một người đứng ở tầng chiến lược nhưng hiểu cách triển khai thực tế.",
        },
        {
          title: "Tổ chức / Media / Creator",
          body: "Muốn xây Creator Network, Content Ecosystem hoặc mô hình hợp tác mới.",
        },
      ],
    },
    workWithMe: {
      label: "Đồng hành cùng tôi",
      heading: "Bạn có thể tìm đến tôi ở nhiều giai đoạn.",
      items: [
        { number: "01", title: "Tư vấn", body: "Bạn có bài toán nhưng chưa biết nên bắt đầu từ đâu." },
        { number: "02", title: "Định hướng", body: "Bạn đã có ý tưởng nhưng cần xây chiến lược và kiến trúc hệ thống." },
        { number: "03", title: "Xây dựng", body: "Bạn muốn xây một kênh / Content IP / Creator Network từ con số 0." },
        { number: "04", title: "Triển khai", body: "Bạn cần người kết nối và điều phối từ nội dung đến sản xuất." },
        { number: "05", title: "Phát triển", body: "Bạn đã có hệ thống nhưng muốn tối ưu và mở rộng." },
      ],
    },
    finalCta: {
      heading: "Bạn đang muốn xây dựng điều gì?",
      options: [
        "Một kênh nội dung mới.",
        "Một thương hiệu mới.",
        "Một hệ thống nội dung đa nền tảng.",
        "Một Content IP.",
        "Một Creator Network.",
        "Hay một hệ sinh thái nội dung có khả năng phát triển lâu dài.",
      ],
      cta: "Trao đổi về bài toán của bạn",
    },
    contact: {
      label: "Liên hệ",
      heading: "Bạn đang muốn xây dựng điều gì?",
      sub: "Điền bài toán của bạn — tôi sẽ phản hồi trực tiếp qua email trong thời gian sớm nhất.",
      formName: "Họ và tên",
      formCompany: "Doanh nghiệp / Thương hiệu",
      formProjectType: "Bạn đang muốn xây dựng điều gì?",
      formProjectTypeOptions: [
        "Xây kênh mới",
        "Chiến lược nội dung",
        "Content IP",
        "Creator / KOL / KOC",
        "Sản xuất",
        "Phát triển đa nền tảng",
        "Tối ưu hệ thống",
        "Đối tác chiến lược",
      ],
      formProblem: "Bài toán hiện tại",
      formTimeline: "Thời gian dự kiến",
      formTimelineOptions: ["Ngay bây giờ", "1–3 tháng tới", "Quý tới", "Chưa xác định"],
      formContactInfo: "Email / Số điện thoại",
      formSubmit: "Gửi bài toán của bạn",
      formSending: "Đang gửi...",
      formSuccess: "Cảm ơn anh/chị! Tôi đã nhận được thông tin và sẽ phản hồi sớm nhất.",
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
      home: "Home",
      whoAmI: "Who I Am",
      capabilities: "How I Can Help",
      work: "Work",
      insights: "Insights",
      contact: "Contact",
      cta: "Let's talk",
    },
    hero: {
      eyebrow: "Strategic Consultant & Partner for Multi-Platform Content Development",
      name: "HOANG NGUYEN",
      headline: "Building and standardizing multi-channel content ecosystems for businesses from the ground up.",
      subheadline:
        "I work directly alongside businesses to shape brand identity, plan long-term content strategy, and optimize the resources needed to execute it. With a structured roadmap, I turn early-stage ideas into media channels with sharp positioning, sustainable operations, and standout growth capability across every digital platform.",
      capabilityLine: "DIRECTION · CONTENT · CREATOR · PRODUCTION · MULTI-PLATFORM · OPTIMIZATION",
      ctaPrimary: "How I can help",
      ctaSecondary: "Talk about your project",
      subCredentials: [
        "Vice Chairman — Hanoi's Startup, Innovation & Digital Transformation Network",
        "Co-founder & Admin — Highnoy Group Parkour Vietnam",
      ],
      scrollHint: "Scroll to explore",
    },
    aboutIntro: {
      label: "About Me",
      paragraph:
        "From a Bách Khoa University student who fell for Parkour on the streets of Hanoi to an Independent Advisor working with brands and content channels — my 12-year journey ran through Highnoy, METUB Network, and Metub Creators, covered by Thanh Niên, Đẹp, VTV, and other national press.",
      paragraphMore:
        "I helped build Highnoy — a Hanoi-based Parkour group with nationwide influence, running a YouTube channel with 1.2M+ subscribers and a network of member channels reaching 4M+ followers and 2B+ views combined. I then moved into a different chapter at METUB Network — where I continued directing and creating content, directly managing channels and guiding nearly 200 creators, KOLs, KOCs, and artists. METUB is one of Vietnam's leading digital entertainment and media companies, originally built as a unit under YouTube's Multi-Channel Network (MCN); it helps individuals and organizations produce, distribute, optimize, and monetize the content they create — today it owns thousands of channels reaching hundreds of millions of followers. As part of the Gen Z content-creator generation who pours everything into the craft, I founded the YouTube channel Metub Creators — a platform storing knowledge from the basics to advanced, so creators can review and practice anytime.",
      readMore: "Read more",
      readLess: "Show less",
      pressLabel: "Featured in",
      press: [
        {
          outlet: "Thanh Niên",
          title: "The handsome 9X who went from a Parkour obsession to directing YouTube content",
          url: "https://thanhnien.vn/9x-dien-trai-tu-me-parkour-den-dinh-huong-noi-dung-sang-tao-youtube-1851032573.htm",
        },
        {
          outlet: "Đẹp",
          title: "Where should Gen Z start if they want to create content on YouTube?",
          url: "https://dep.com.vn/gen-z-nen-bat-dau-tu-dau-neu-muon-sang-tao-noi-dung-tren-youtube/",
        },
        {
          outlet: "Hà Nội Online",
          title: "Training logical, calculated thinking through Parkour",
          url: "https://hanoionline.vn/ren-luyen-kha-nang-tinh-toan-logic-voi-parkour-232635.htm",
        },
        {
          outlet: "VTV",
          title: "S-Việt Nam: Parkour — Street Jumping",
          url: "https://vtv.vn/video/s-viet-nam-parkour-buoc-nhay-duong-pho-253641.htm",
        },
        {
          outlet: "Red Bull Vietnam",
          title: "The Highnoy Parkour community spreading positive energy",
          url: "https://www.redbullvietnam.com/a/nhieu-nghe-si-viet-va-cong-dong-the-thao-thi-nhau-tham-gia-thu-thach-lan-toa-nang-luong-tich-cuc-126",
        },
        {
          outlet: "VietNamNet",
          title: "Parkour: A Global Sport Deeply Rooted in Vietnam",
          url: "https://vietnamnet.vn/en/parkour-a-global-sport-deeply-rooted-in-vietnam-654427.html",
        },
        {
          outlet: "Vietnam News",
          title: "Parkour: A Global Sport Deeply Rooted in Viet Nam",
          url: "https://vietnamnews.vn/sports/749187/parkour-a-global-sport-deeply-rooted-in-viet-nam.html",
        },
      ],
      images: ["/images/about/about-01.png"],
      imageCaption:
        "The moment I hosted the \"Metub Creators — Podcast\" series — the YouTube channel I founded myself.",
      imageCaptionUrl: "https://www.youtube.com/watch?v=hnC7XVQsOPU",
      imageCaptionLinkLabel: "Watch podcast",
    },
    stats: [
      { value: "12+", label: "Years of experience" },
      { value: "3M+", label: "Cross-platform followers" },
      { value: "2B+", label: "Cumulative views" },
      { value: "200M+", label: "Campaign views / month" },
      { value: "20+", label: "Major brand partners" },
    ],
    trustedBy: {
      label: "Partners who've come along",
      note: "Along with many other brands and organizations",
      items: [
        { name: "Techcombank", logo: "/logos/techcombank.png" },
        { name: "Nike", logo: "/logos/nike.svg" },
        { name: "Samsung", logo: "/logos/samsung.svg" },
        { name: "Mentos", logo: "/logos/mentos.svg" },
        { name: "Tiger Beer", logo: "/logos/tiger-beer.png" },
        { name: "TH True Milk", logo: "/logos/th-true-milk.svg" },
        { name: "Vingroup", logo: "/logos/vingroup.svg" },
        { name: "Biti's", logo: "/logos/bitis.svg" },
        { name: "Google", logo: "/logos/google.svg" },
        { name: "Adidas", logo: "/logos/adidas.svg" },
        { name: "Thăng Long Cars", logo: "/logos/thang-long-cars.svg" },
      ],
    },
    showreel: {
      label: "Showreel",
      title: "Biti's Hunter × Highnoy",
      tag: "Run Your Way",
      description:
        "Served as Production Manager for the Biti's Hunter Core x Highnoy campaign — where the Vietnamese footwear brand's breakthrough spirit meets the free-flowing rhythm of street culture. Be Cool. Be Hunter.",
      creditsLabel: "Credits",
      credits: [
        { role: "Production Manager", names: "Hoàng Nguyễn" },
        { role: "Athletes", names: "Phạm Xuân Lâm, Chương Nguyễn, Huy Văn, Tài Hiếu" },
        { role: "Camera Operators", names: "Lê Minh, Trần Ngọc Minh" },
        { role: "Drone Operator", names: "Nguyễn Quang Thành" },
        { role: "Production Crew", names: "Lưu Trung Hiếu, Đào Đức Hiếu, Tút Sờ Tích" },
      ],
      hashtags: "#BitisHunter #Highnoy #BeCoolBeHunter",
      play: "Watch video",
    },
    problem: {
      label: "A common problem",
      heading: "Want to build a content channel?",
      sub: "But not sure where to start?",
      points: [
        "You have a brand but don't know how to build a channel around it.",
        "You have a product but don't know what story to tell.",
        "You have plenty of ideas but no content system.",
        "You're on many platforms, but each one is doing its own thing.",
        "You want to work with Creators but don't know who to find or how to connect.",
        "You want to produce video but have no process from idea to finished asset.",
        "You have content but don't know how to grow it across platforms.",
        "You're publishing, but you have no system to track and optimize.",
      ],
      keyMessage: ["You don't necessarily need more content.", "You need a system."],
    },
    capabilities: {
      label: "Core capabilities",
      heading: "From direction to growth",
      sub: "A good content channel doesn't start with posting a video. It starts with knowing what you're building, for whom, and why.",
      flow: "01 Direction → 02 Content → 03 Creator → 04 Production → 05 Post-Production → 06 Distribution → 07 Optimization",
      items: [
        {
          number: "01",
          title: "Direction",
          body: "Define what the channel is built for, its audience, and its positioning before production.",
        },
        {
          number: "02",
          title: "Content",
          body: "Turn direction into concrete topics, formats, series, and scripts.",
        },
        {
          number: "03",
          title: "Creator",
          body: "Connect with the right Creators, KOLs, and KOCs to amplify the right message.",
        },
        {
          number: "04",
          title: "Production",
          body: "Turn ideas into reality: filming, editing, packaging true to the direction.",
        },
        {
          number: "05",
          title: "Post-Production",
          body: "Refine content, optimizing hook, pacing, and versions for each platform.",
        },
        {
          number: "06",
          title: "Distribution",
          body: "Deliver the right content to the right platform and the right audience.",
        },
        {
          number: "07",
          title: "Optimization",
          body: "Track performance and keep adjusting for sustainable growth.",
        },
      ],
    },
    whyMe: {
      label: "Why me",
      heading: "Why can I do this?",
      sub: "Not just a list of achievements — capability built through real, direct roles.",
      facets: [
        {
          title: "Creator",
          body: "I created content and built community myself — starting with Highnoy's earliest Parkour videos.",
        },
        {
          title: "Builder",
          body: "I built Highnoy, Challenge Me, and METUB Creators from very early stages, when there was no existing playbook.",
        },
        {
          title: "Operator",
          body: "I operated a creator network of nearly 200 partner YouTube channels and a production house of nearly 800 videos at METUB.",
        },
        {
          title: "Strategist",
          body: "I've advised multi-channel content strategy for brands and systems like Thăng Long Cars.",
        },
        {
          title: "Connector",
          body: "I can connect Creators, KOLs, KOCs, Influencers, brands, production crews, and the resources needed to turn strategy into reality.",
        },
      ],
      keyMessage: "I don't just understand one link. I understand how the links connect.",
    },
    journey: {
      label: "Career journey",
      heading: "12 years — from Creator to Content Ecosystem Partner",
      sub: "From founding a street-sports community to advising multi-channel content strategy.",
      items: [
        {
          period: "2025 — 2026",
          era: "ECOSYSTEM → STRATEGY",
          title: "Independent Advisor — Multi-Platform Content Development",
          org: "Independent Consulting",
          bullets: [
            "Advised Thăng Long Cars on content direction and channel architecture — helping the system scale to 8 channels and 3M+ monthly views.",
            "Concurrently joined the communications crew for the feature film \"Đèn Âm Hồn – Bà Đừng Buồn Con\" at Challenge Me Entertainment — helping direct and coordinate a cross-platform satellite content system reaching 200M views/month.",
          ],
        },
        {
          period: "2020 — 2025",
          era: "CREATOR → NETWORK → OPERATION",
          title: "From Partner Manager to Head of METUB Creators",
          org: "METUB Vietnam",
          bullets: [
            "Pitched and secured leadership approval for the new \"METUB Creators\" business line — shifting the model from partner management to owning and monetizing digital assets.",
            "Led a production house of nearly 800 videos; grew the brand channel to 75M views and 80K+ organic subscribers.",
            "Managed a portfolio of ~200 partner YouTube channels, then directed content growth for ~100 partner creators — recognized as Top 3 nationwide performer (2020–2021).",
          ],
        },
        {
          period: "2017 — 2020",
          era: "CONTENT → CAMPAIGN",
          title: "Independent Creative & Media Partner",
          org: "Content Creator",
          bullets: [
            "Directed ideation, scripting, and production of viral campaigns for Samsung, Mentos, TH True Milk, and Tiger Beer.",
            "Featured expert and host on VTV3's primetime documentary series \"S-Việt Nam.\"",
          ],
        },
        {
          period: "2016 — Present",
          era: "BUILD → SCALE",
          title: "Content Development Lead",
          org: "Challenge Me — \"Challenge Me\"",
          bullets: [
            "Joined at 6,000 subscribers, shaping the channel's core content and strategy.",
            "Scaled the ecosystem to 4.6M YouTube subscribers + 4M Facebook followers, 3.6B+ views system-wide.",
            "Grew alongside the channel across a decade of sustained development, successfully expanding into a retail merchandise line from its very first month.",
          ],
        },
        {
          period: "2015 — Present",
          era: "ZERO → ONE",
          title: "Founder & Executive Director",
          org: "Highnoy — Street Sports Ecosystem",
          bullets: [
            "Pioneered Vietnam's largest Parkour community from zero — now 3M+ cross-platform followers.",
            "Turned the community into an exclusive strategic marketing channel for Techcombank, Nike, Redbull, Vingroup, and Biti's.",
            "Nearly 2B cumulative views as of 2026.",
          ],
        },
      ],
    },
    caseStudies: {
      label: "Case Study",
      heading: "Problems I've worked through",
      sub: "Every project follows the same structure: problem → perspective → solution → execution → result.",
      otherCasesLabel: "Other Case Studies",
      stageLabel: "Links involved",
      viewCase: "View details",
      items: [
        {
          id: "thanglongcars",
          brand: "Thăng Long Cars",
          cover: "/images/portfolio/thang-long-cars.jpg",
          title: "Advising Content System Growth",
          tag: "Independent Consulting · Multi-Channel",
          year: "2025 — Present",
          problem: "Content was already being published, but with no clear channel architecture or long-term multi-channel direction.",
          perspective: "A clear channel architecture is needed before scaling — not just more video output.",
          solution: "Advise on content direction and propose a channel architecture and platform mix fit for Thăng Long Cars' product ecosystem.",
          execution: "As Independent Consultant, directly advised on multi-channel content development and platform selection; the Thăng Long Cars team directly executed and operated the system.",
          result: "8 channels · 3M+ views/month — strengthening brand recognition and directly driving vehicle sales.",
          stages: ["Direction", "Content", "Multi-Platform", "Tracking", "Optimization"],
        },
        {
          id: "metubcreators",
          brand: "METUB Creators",
          title: "Building a Creator Ecosystem",
          tag: "Executive Leadership · Creator Network",
          year: "2023 — 2025",
          problem: "METUB needed to shift from a pure \"partner management\" model to owning and monetizing its own digital assets.",
          perspective: "A Creator network only creates lasting value when it's run as a long-term ecosystem — not a collection of one-off contracts.",
          solution: "Proactively pitched and secured leadership approval for the new \"METUB Creators\" business line.",
          execution: "Led a production house of nearly 800 videos, directly directing Creators, managing the network, and growing the brand channel.",
          result: "Brand channel reached 75M views and 80K+ organic subscribers.",
          stages: ["Direction", "Creator", "Production", "Tracking"],
        },
        {
          id: "challengeme",
          brand: "Challenge Me",
          title: "Building a Zero-to-One Ecosystem",
          tag: "Ecosystem Planning · Growth",
          year: "2016 — Present",
          problem: "Build a content ecosystem in the exploration/experience space from zero, with no existing playbook.",
          perspective: "A sustainable content channel needs to be built as a multi-platform ecosystem from day one, not a single YouTube channel.",
          solution: "Shaped the core content and strategy right from the 6,000-subscriber mark.",
          execution: "Scaled YouTube, Facebook, and a retail merchandise line in parallel with content.",
          result: "4.6M YouTube subscribers · 4M Facebook followers · 3.6B+ views system-wide.",
          stages: ["Direction", "Content", "Multi-Platform", "Growth"],
        },
        {
          id: "denamhon",
          brand: "Đèn Âm Hồn – Bà Đừng Buồn Con",
          title: "Communications Campaign for a Feature Film",
          tag: "Film · Cross-platform",
          year: "2025 — 2026",
          problem: "A feature film needed multi-platform communications reach that would translate into real box-office performance.",
          perspective: "Film communications don't stop at promotion — they need a satellite content system working in sync across platforms.",
          solution: "Joined the communications crew, contributing to the integrated marketing strategy and the cross-platform satellite content system.",
          execution: "Worked alongside the crew, coordinating and developing content across platforms.",
          result: "200M views/month reach — directly contributing to a standout box-office opening within the first 10 days.",
          stages: ["Content", "Multi-Platform", "Publishing", "Tracking"],
        },
      ],
      campaignsHeading: "Brand Campaigns",
      campaigns: [
        {
          id: "techcombank",
          brand: "Techcombank",
          logo: "/logos/techcombank.png",
          year: "2023",
          description: "Exclusive visual asset for a flagship campaign, working directly with lead director Việt Tú.",
          proof: "Exclusive visual partner",
        },
        {
          id: "nike",
          brand: "Nike",
          logo: "/logos/nike.svg",
          year: "2019–2022",
          description: "Designed and personally performed high-risk Parkour routines at a brand activation event.",
          proof: "Key Performance Partner",
        },
        {
          id: "samsung",
          brand: "Samsung",
          logo: "/logos/samsung.svg",
          year: "2018",
          description: "Directed production of the Galaxy Note campaign, shot 100% on mobile.",
          proof: "Most Breakthrough Creative Video",
        },
        {
          id: "mentos",
          brand: "Mentos",
          logo: "/logos/mentos.svg",
          year: "2017",
          description: "From concept to commanding full production of \"Breaking the Distance.\"",
          proof: "National Excellence Award",
        },
      ],
    },
    featuredCases: [
      {
        eyebrow: "Case Study 01",
        brand: "Chương Tailor",
        title: "Building & Growing a Multi-Platform Content Channel",
        metric: "From 2,000 → 12,000+ YouTube subscribers in 3 months",
        intro: [
          "Chương Tailor had a strong brand foundation but needed a clearer content direction for the digital space.",
          "I was involved throughout the entire process — direction → content → production → filming → post-production → publishing → tracking → optimization.",
        ],
        roleLabel: "Role",
        roles: [
          { title: "Content Direction", body: "Defined content direction, topics, and format fit for the brand." },
          { title: "Content Development", body: "Developed ideas, series, scripts, and a content system." },
          { title: "Production", body: "Directed and coordinated filming, crew, and production." },
          { title: "Distribution", body: "Grew content on YouTube and other platforms." },
          { title: "Optimization", body: "Tracked data and feedback, continuously adjusting content." },
        ],
        resultsLabel: "Results after 3 months",
        results: [
          { value: "+10,000", label: "new YouTube subscribers" },
          { value: "500,000+", label: "YouTube views" },
          { value: "1,000,000+", label: "reach / engagement across platforms" },
        ],
        keyLabel: "Key Takeaway",
        keyMessage: "Not just producing video — building a content system capable of growth.",
        avatar: "/images/case-studies/chuong-tailor-avatar.jpg",
      },
      {
        eyebrow: "Case Study 02",
        brand: "Việt Phương Thoa",
        title: "Advising & Developing Short-Form Content",
        metric: "80 videos · 20M+ views · 3 months",
        intro: [
          "In 2021, as TikTok and short-form video began taking off in Vietnam, I worked with Việt Phương Thoa on directing and developing short-form content for the new platform.",
          "The problem wasn't just producing video — it was finding the format, storytelling style, and content rhythm fit for viewer behavior on a new platform.",
        ],
        roleLabel: "Role",
        roles: [
          { title: "Content Direction", body: "Directed a short-form approach fit for the Creator and the platform." },
          { title: "Format Development", body: "Tested and developed formats capable of engaging viewers." },
          { title: "Production", body: "Worked alongside turning ideas into real video." },
          { title: "Distribution", body: "Built a publishing rhythm and grew content on the platform." },
          { title: "Optimization", body: "Tracked feedback and performance, continuously adjusting." },
        ],
        resultsLabel: "Results after 3 months",
        results: [
          { value: "80", label: "short-form videos developed and published" },
          { value: "20M+", label: "views on TikTok" },
          { value: "3 months", label: "of testing, measuring, and optimizing" },
        ],
        scaleLabel: "Current scale",
        scaleIntro: "That growth trajectory later took Việt Phương Thoa to become a large-scale Creator across multiple platforms.",
        scale: [
          { value: "16M+", label: "TikTok followers" },
          { value: "3M+", label: "YouTube subscribers" },
          { value: "3M+", label: "Facebook likes" },
        ],
        avatar: "/images/case-studies/vpt-avatar.jpg",
      },
    ],
    awards: {
      label: "Achievements & Awards",
      heading: "Recognized milestones",
      sub: "Creative content awards granted directly by brands and organizations.",
      items: [
        {
          title: "Breakthrough Creative Award",
          org: "Samsung Vietnam",
          year: "Aug 2018",
          description: "A Galaxy Note ad shot 100% on mobile phones — won \"Most Breakthrough Creative Video\" presented directly by Samsung Vietnam's leadership.",
        },
        {
          title: "National Excellence Award",
          org: "Mentos",
          year: "Aug 2017",
          description: "National first place for the \"Breaking the Distance\" campaign — from concept strategy through full production.",
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
          title: "Best Video Award",
          org: "AMD Global",
          year: "2019",
          description: "Entered AMD's program for its next-gen PC/chipset line and won the Best Video award.",
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
          description: "Turned the \"Street Arena\" sports tournament into a top-tier brand storytelling campaign.",
        },
        {
          title: "Public TV Personality",
          org: "VTV3",
          year: "2018",
          description: "Featured expert and host on the primetime documentary series \"S-Việt Nam.\"",
        },
      ],
    },
    moments: {
      label: "Moments",
      heading: "Moments with Artists, Content Creators, KOLs, KOCs...",
      sub: "From the events and campaigns along the way.",
      items: [
        "/images/moments/google.jpg",
        "/images/moments/candid.jpg",
        "/images/moments/award-event.jpg",
        "/images/moments/ballroom.jpg",
        "/images/moments/trophy.jpg",
        "/images/moments/consulting-2.jpg",
        "/images/moments/filmset-1.jpg",
        "/images/moments/filmset-2.jpg",
        "/images/moments/filmset-3.jpg",
        "/images/moments/denamhon-hoangnam.jpg",
        "/images/moments/google-arts-group.jpg",
        "/images/moments/google-arts-solo.jpg",
        "/images/moments/wall/wall-01.jpg",
        "/images/moments/wall/wall-02.jpg",
        "/images/moments/wall/wall-03.jpg",
        "/images/moments/wall/wall-04.jpg",
        "/images/moments/wall/wall-05.jpg",
        "/images/moments/wall/wall-06.jpg",
        "/images/moments/wall/wall-07.jpg",
        "/images/moments/wall/wall-08.jpg",
        "/images/moments/wall/wall-09.jpg",
        "/images/moments/wall/wall-10.jpg",
        "/images/moments/wall/wall-11.jpg",
        "/images/moments/wall/wall-12.jpg",
        "/images/moments/wall/wall-13.jpg",
        "/images/moments/wall/wall-14.jpg",
        "/images/moments/wall/wall-16.jpg",
        "/images/moments/wall/wall-18.jpg",
        "/images/moments/wall/wall-20.jpg",
        "/images/moments/wall/wall-21.jpg",
        "/images/moments/wall/wall-22.jpg",
        "/images/moments/wall/wall-23.jpg",
        "/images/moments/wall/wall-24.jpg",
        "/images/moments/wall/wall-25.jpg",
        "/images/moments/wall/wall-26.jpg",
      ],
    },
    whoIWorkWith: {
      label: "Who I work with",
      heading: "I typically work with",
      items: [
        { title: "Businesses", body: "Wanting to build or restructure their content system." },
        { title: "Brands", body: "Wanting to grow a channel, Content IP, or multi-platform campaign." },
        { title: "Founders / CEOs", body: "Wanting to build a personal brand and a distinct voice." },
        {
          title: "Marketing teams",
          body: "Needing someone who sits at the strategic level but understands real execution.",
        },
        {
          title: "Organizations / Media / Creators",
          body: "Wanting to build a Creator Network, Content Ecosystem, or a new collaboration model.",
        },
      ],
    },
    workWithMe: {
      label: "Work with me",
      heading: "You can reach out to me at several stages.",
      items: [
        { number: "01", title: "Consulting", body: "You have a problem but aren't sure where to start." },
        { number: "02", title: "Direction", body: "You have an idea but need a strategy and system architecture." },
        { number: "03", title: "Building", body: "You want to build a channel / Content IP / Creator Network from zero." },
        { number: "04", title: "Execution", body: "You need someone to connect and coordinate from content to production." },
        { number: "05", title: "Growth", body: "You already have a system but want to optimize and scale it." },
      ],
    },
    finalCta: {
      heading: "What are you looking to build?",
      options: [
        "A new content channel.",
        "A new brand.",
        "A multi-platform content system.",
        "A Content IP.",
        "A Creator Network.",
        "Or a content ecosystem built to grow for the long run.",
      ],
      cta: "Talk about your project",
    },
    contact: {
      label: "Contact",
      heading: "What are you looking to build?",
      sub: "Tell me about your problem — I'll reply directly by email as soon as possible.",
      formName: "Full name",
      formCompany: "Business / Brand",
      formProjectType: "What are you looking to build?",
      formProjectTypeOptions: [
        "New channel",
        "Content strategy",
        "Content IP",
        "Creator / KOL / KOC",
        "Production",
        "Multi-platform growth",
        "System optimization",
        "Strategic partnership",
      ],
      formProblem: "Your current problem",
      formTimeline: "Expected timeline",
      formTimelineOptions: ["Right away", "Next 1–3 months", "Next quarter", "Not yet decided"],
      formContactInfo: "Email / Phone",
      formSubmit: "Send your problem",
      formSending: "Sending...",
      formSuccess: "Thank you! I've received your message and will reply as soon as possible.",
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
