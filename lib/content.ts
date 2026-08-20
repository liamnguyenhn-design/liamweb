export type BrandLogo = { name: string; logo: string };

export type Capability = {
  number: string;
  title: string;
  headline: string;
  body: string;
  result: string;
  image?: string;
};

export type FrameworkStage = {
  key: string;
  question: string;
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

export type ProcessStage = {
  number: string;
  title: string;
  body: string;
  bullets?: string[];
  flow?: string;
  note?: string;
};

export type ChuongTailorCase = {
  eyebrow: string;
  heading: string;
  subheading: string;
  problemLabel: string;
  problem: string[];
  roleLabel: string;
  roleHeading: string;
  roleFlow: string;
  roleBody: string;
  process: ProcessStage[];
  resultsHeading: string;
  growth: {
    start: string;
    startLabel: string;
    added: string;
    addedLabel: string;
    end: string;
    endLabel: string;
  };
  growthBody: string;
  metrics: { value: string; label: string; body: string }[];
  keyResultLabel: string;
  keyResult: string[];
  keyMessage: string[];
  cover: string;
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
  stats: Stat[];
  trustedBy: { label: string; note: string; items: BrandLogo[] };
  problem: {
    label: string;
    heading: string;
    sub: string;
    points: string[];
    keyMessage: string[];
  };
  ecosystem: {
    label: string;
    heading: string;
    sub: string;
    stages: { number: string; label: string }[];
  };
  capabilities: {
    label: string;
    heading: string;
    sub: string;
    items: Capability[];
  };
  framework: {
    label: string;
    heading: string;
    sub: string;
    stages: FrameworkStage[];
    center: string;
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
  chuongTailor: ChuongTailorCase;
  awards: { label: string; heading: string; sub: string; items: Award[] };
  moments: {
    label: string;
    heading: string;
    sub: string;
    viewAll: string;
    items: { src: string; caption: string }[];
  };
  insights: {
    label: string;
    heading: string;
    sub: string;
    items: { quote: string; body: string }[];
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
      eyebrow: "Cố vấn & Đối tác Phát triển Hệ sinh thái Nội dung",
      name: "HOÀNG NGUYỄN",
      headline: "Từ ý tưởng đến hệ sinh thái nội dung.",
      subheadline:
        "Tôi giúp doanh nghiệp xây dựng và phát triển kênh nội dung đa nền tảng — từ định hướng thương hiệu, chiến lược nội dung, kết nối Creators, tổ chức sản xuất, hậu kỳ, đăng tải đến theo dõi và tối ưu tăng trưởng.",
      capabilityLine: "ĐỊNH HƯỚNG · NỘI DUNG · CREATOR · SẢN XUẤT · ĐA NỀN TẢNG · TỐI ƯU",
      ctaPrimary: "Tôi có thể giúp gì?",
      ctaSecondary: "Trao đổi về dự án",
      subCredentials: [
        "Phó Chủ tịch mạng lưới khởi nghiệp, đổi mới sáng tạo và chuyển đổi số Thủ Đô - HUB Network",
        "Co-founder & Admin - Highnoy Group Parkour Việt Nam",
      ],
      scrollHint: "Cuộn để khám phá",
    },
    stats: [
      { value: "12+", label: "Năm kinh nghiệm" },
      { value: "3M+", label: "Followers đa nền tảng" },
      { value: "2B+", label: "Lượt xem tích lũy" },
      { value: "200M+", label: "Lượt xem chiến dịch / tháng" },
      { value: "20+", label: "Thương hiệu lớn" },
    ],
    trustedBy: {
      label: "Được tin tưởng bởi",
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
      ],
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
    ecosystem: {
      label: "Cách tôi đồng hành",
      heading: "Tôi có thể đồng hành xuyên suốt toàn bộ quá trình.",
      sub: "Không phải một mắt xích đơn lẻ — mà toàn bộ chuỗi giá trị của một hệ sinh thái nội dung.",
      stages: [
        { number: "01", label: "Định hướng" },
        { number: "02", label: "Nội dung" },
        { number: "03", label: "Creator" },
        { number: "04", label: "Sản xuất" },
        { number: "05", label: "Hậu kỳ" },
        { number: "06", label: "Đa nền tảng" },
        { number: "07", label: "Đăng tải" },
        { number: "08", label: "Theo dõi" },
        { number: "09", label: "Tối ưu" },
        { number: "10", label: "Phát triển" },
      ],
    },
    capabilities: {
      label: "Năng lực cốt lõi",
      heading: "Bảy mắt xích, một người đứng giữa.",
      sub: "Mỗi năng lực dưới đây tôi đều đã trực tiếp làm — không chỉ tư vấn trên giấy.",
      items: [
        {
          number: "01",
          title: "Định hướng & Xây dựng kênh",
          headline: "Một định hướng rõ ràng trước khi đầu tư vào sản xuất.",
          body: "Tôi giúp doanh nghiệp xác định kênh được xây để làm gì, đối tượng khán giả, định vị, Brand Direction, Content Direction, nền tảng phù hợp, vai trò của từng nền tảng, format và hướng phát triển dài hạn.",
          result: "Kết quả: một định hướng rõ ràng trước khi đầu tư vào sản xuất.",
          image: "/images/pillars/1-cover.jpg",
        },
        {
          number: "02",
          title: "Chiến lược & Phát triển Nội dung",
          headline: "Biến những ý tưởng rời rạc thành một hệ thống có cấu trúc.",
          body: "Tôi hỗ trợ Content Strategy, Content Pillar, Content Architecture, format, series, kịch bản, Content Calendar, Content IP và Creative Direction.",
          result: "Kết quả: biến những ý tưởng rời rạc thành một hệ thống nội dung có cấu trúc.",
        },
        {
          number: "03",
          title: "Creator / KOL / KOC / Influencer",
          headline: "Kết nối đúng người để khuếch đại nội dung.",
          body: "Tôi có khả năng kết nối với Creators, KOLs, KOCs, Influencers, Hosts, Experts và Communities — xác định Creator phù hợp, kết nối, điều phối và phát triển quan hệ hợp tác dài hạn. Creator không chỉ là người đăng quảng cáo — có thể trở thành nhân vật, người tạo nội dung, host, cộng tác viên, kênh phân phối, một phần của hệ sinh thái thương hiệu.",
          result: "Kết quả: một mạng lưới cộng tác thay vì các hợp đồng rời rạc.",
          image: "/images/moments/candid.jpg",
        },
        {
          number: "04",
          title: "Sản xuất Nội dung",
          headline: "Biến ý tưởng thành nội dung thực tế.",
          body: "Tôi có thể đồng hành trong pre-production, production, Creative Direction, quay, điều phối Creator/Talent, điều phối ekip, kiểm soát nội dung và kiểm soát chất lượng đầu ra. Giá trị của tôi là hiểu toàn bộ quy trình, biết dự án cần gì và có khả năng kết nối đúng nguồn lực để triển khai.",
          result: "Kết quả: ý tưởng được triển khai đúng với định hướng ban đầu.",
          image: "/images/pillars/2-cover.jpg",
        },
        {
          number: "05",
          title: "Hậu kỳ & Đóng gói",
          headline: "Từ raw material đến content có thể phát hành.",
          body: "Tôi có thể định hướng và phối hợp Video Editing, short-form, long-form, Reels, Shorts, motion, thumbnail, caption, subtitle, versioning và adaptation.",
          result: "Kết quả: một nội dung gốc phát triển thành nhiều phiên bản phù hợp với nhiều nền tảng.",
        },
        {
          number: "06",
          title: "Phân phối Đa nền tảng",
          headline: "Một ý tưởng — nhiều điểm chạm.",
          body: "TikTok, YouTube, Facebook, Instagram, Reels, Shorts — không copy nguyên một nội dung lên mọi nền tảng. Mỗi nền tảng cần được điều chỉnh theo hook, format, độ dài, caption, thumbnail và hành vi người dùng.",
          result: "Kết quả: mỗi nền tảng nhận đúng phiên bản nội dung phù hợp với nó.",
        },
        {
          number: "07",
          title: "Theo dõi & Tối ưu",
          headline: "Đăng tải không phải là điểm kết thúc.",
          body: "Theo dõi views, watch time, retention, engagement, format, chủ đề, Creator và platform — theo quy trình phân tích, điều chỉnh, thử nghiệm, tối ưu và phát triển.",
          result: "Kết quả: không chỉ vài video tốt, mà một format có thể phát triển lâu dài.",
        },
      ],
    },
    framework: {
      label: "Khung năng lực",
      heading: "Hoàng Nguyễn Content Ecosystem",
      sub: "Bảy câu hỏi tôi luôn đặt ra khi bắt đầu một dự án nội dung.",
      stages: [
        { key: "STRATEGY", question: "Ta đang xây gì?" },
        { key: "CONTENT", question: "Ta nói gì?" },
        { key: "CREATOR", question: "Ai sẽ tạo và khuếch đại?" },
        { key: "PRODUCTION", question: "Làm thế nào để biến ý tưởng thành sản phẩm?" },
        { key: "DISTRIBUTION", question: "Đưa nó đến đâu?" },
        { key: "OPTIMIZATION", question: "Điều gì đang hiệu quả?" },
        { key: "GROWTH", question: "Làm thế nào để phát triển tiếp?" },
      ],
      center: "CONTENT ECOSYSTEM",
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
    chuongTailor: {
      eyebrow: "Case Study nổi bật",
      heading: "Chương Tailor",
      subheading: "Từ 2.000 đến 12.000+ người đăng ký — Xây dựng và tăng trưởng hệ thống nội dung đa nền tảng",
      problemLabel: "Bài toán",
      problem: [
        "Khi bắt đầu đồng hành, kênh YouTube của Chương Tailor có khoảng 2.000 người đăng ký.",
        "Bài toán không đơn thuần là sản xuất thêm video, mà là tìm ra hướng nội dung phù hợp để thương hiệu có thể xây dựng sự hiện diện mạnh hơn trên môi trường số.",
        "Hoàng Nguyễn tham gia tư vấn và đồng hành trong việc định hướng nội dung, sản xuất, quay, đăng tải, theo dõi và tối ưu hiệu quả.",
      ],
      roleLabel: "Vai trò",
      roleHeading: "Từ chiến lược đến triển khai",
      roleFlow: "Định hướng nội dung → Phát triển ý tưởng → Sản xuất & quay → Hậu kỳ → Đăng tải → Đa nền tảng → Theo dõi → Tối ưu",
      roleBody: "Không chỉ đưa ra chiến lược, mà trực tiếp đồng hành trong quá trình biến chiến lược thành nội dung thực tế.",
      process: [
        {
          number: "01",
          title: "Định hướng",
          body: "Phân tích hiện trạng của kênh và xác định hướng nội dung phù hợp với thương hiệu Chương Tailor. Tập trung vào việc tìm ra:",
          bullets: [
            "Chủ đề phù hợp",
            "Cách kể chuyện",
            "Format",
            "Hướng phát triển nội dung",
            "Cách thể hiện thương hiệu trên nền tảng số",
          ],
        },
        {
          number: "02",
          title: "Phát triển nội dung",
          body: "Tư vấn và phát triển hệ thống nội dung thay vì sản xuất từng video riêng lẻ.",
          flow: "Ý tưởng → Format → Series → Kịch bản → Sản xuất",
          note: "Mục tiêu là tạo ra những nội dung vừa thể hiện được giá trị thương hiệu, vừa phù hợp với hành vi người xem.",
        },
        {
          number: "03",
          title: "Sản xuất & Quay",
          body: "Đồng hành trong quá trình đưa ý tưởng vào thực tế:",
          bullets: [
            "Định hướng nội dung trước khi quay",
            "Phát triển concept",
            "Quay video",
            "Phối hợp ekip",
            "Điều phối quá trình sản xuất",
            "Đảm bảo nội dung bám đúng định hướng",
          ],
        },
        {
          number: "04",
          title: "Hậu kỳ & Đóng gói",
          body: "Từ footage ban đầu, phát triển thành nội dung hoàn chỉnh để phát hành. Tối ưu:",
          bullets: [
            "Hook",
            "Nhịp video",
            "Cách kể chuyện",
            "Caption",
            "Thumbnail",
            "Short-form",
            "Long-form",
            "Phiên bản cho từng nền tảng",
          ],
        },
        {
          number: "05",
          title: "Đăng tải & Phát triển Đa nền tảng",
          body: "Không chỉ tập trung vào YouTube. Nội dung được phát triển và phân phối trên nhiều nền tảng nhằm mở rộng điểm chạm với khán giả.",
          flow: "YouTube · Facebook · TikTok · Instagram",
          note: "Mỗi nền tảng được điều chỉnh cách đóng gói nội dung phù hợp với hành vi người dùng.",
        },
        {
          number: "06",
          title: "Theo dõi & Tối ưu",
          body: "Sau khi nội dung được đăng tải, tiếp tục theo dõi hiệu quả để xác định:",
          bullets: [
            "Nội dung nào đang hiệu quả",
            "Format nào có tiềm năng",
            "Chủ đề nào thu hút khán giả",
            "Cách triển khai nào cần điều chỉnh",
          ],
          flow: "Theo dõi → Phân tích → Tối ưu → Thử nghiệm → Phát triển",
        },
      ],
      resultsHeading: "Kết quả sau 3 tháng",
      growth: {
        start: "2.000+",
        startLabel: "Người đăng ký ban đầu",
        added: "+10.000",
        addedLabel: "Người đăng ký mới",
        end: "12.000+",
        endLabel: "Người đăng ký",
      },
      growthBody:
        "Sau 3 tháng đồng hành tư vấn nội dung, kênh YouTube tăng thêm khoảng 10.000 người đăng ký, từ khoảng 2.000 lên hơn 12.000 người đăng ký.",
      metrics: [
        {
          value: "500.000+",
          label: "Lượt xem trên YouTube",
          body: "Các nội dung được tư vấn và phát triển đạt tổng cộng hơn 500.000 lượt xem trên YouTube trong giai đoạn này.",
        },
        {
          value: "1.000.000+",
          label: "Người được tiếp cận / tương tác trên đa nền tảng",
          body: "Khi mở rộng nội dung sang nhiều nền tảng, hệ thống nội dung của Chương Tailor tạo ra hơn 1 triệu lượt tương tác/tiếp cận trên hệ sinh thái đa nền tảng.",
        },
      ],
      keyResultLabel: "Key Result",
      keyResult: [
        "+10.000 người đăng ký trong 3 tháng.",
        "Từ một kênh 2.000 người đăng ký",
        "→ xây dựng đà tăng trưởng mới cho hệ thống nội dung.",
      ],
      keyMessage: ["Không chỉ làm video.", "Tìm ra cách để nội dung tăng trưởng."],
      cover: "/images/case-studies/chuong-tailor-cover.jpg",
    },
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
          title: "Video Truyền thông Xuất sắc nhất",
          org: "AMD Global",
          year: "2019",
          description: "Giữ vai trò Giám đốc Sáng tạo cho chiến dịch ra mắt dòng sản phẩm PC/Chipset thế hệ mới.",
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
      heading: "Những khoảnh khắc ngoài đời thực",
      sub: "Từ trụ sở các nền tảng toàn cầu đến các diễn đàn KOL và hiện trường sản xuất.",
      viewAll: "Xem tất cả",
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
          src: "/images/moments/award-event.jpg",
          caption: "Vinh danh tại các diễn đàn KOL & chuyển đổi số",
        },
        {
          src: "/images/moments/ballroom.jpg",
          caption: "Không gian Hội nghị KOL — Ra mắt CLB Niềm tin số Thủ đô",
        },
        {
          src: "/images/moments/trophy.jpg",
          caption: "Cùng đối tác tại Hội nghị KOL, phối hợp tổ chức cùng VCCorp",
        },
        {
          src: "/images/moments/consulting-2.jpg",
          caption: "Buổi làm việc chiến lược nội dung cùng đội ngũ Thăng Long Cars",
        },
        {
          src: "/images/moments/filmset-1.jpg",
          caption: "Hậu trường đoàn làm phim \"Đèn Âm Hồn – Bà Đừng Buồn Con\"",
        },
        {
          src: "/images/moments/filmset-2.jpg",
          caption: "Cùng ê-kíp đoàn làm phim tại phố cổ Hà Nội",
        },
        {
          src: "/images/moments/filmset-3.jpg",
          caption: "Trên phim trường \"Đèn Âm Hồn – Bà Đừng Buồn Con\"",
        },
        {
          src: "/images/moments/denamhon-hoangnam.jpg",
          caption: "Cùng đạo diễn Hoàng Nam trong quá trình thực hiện \"Đèn Âm Hồn – Bà Đừng Buồn Con\"",
        },
        {
          src: "/images/moments/google-arts-group.jpg",
          caption: "Cùng đoàn đại diện tại sự kiện Google Arts & Culture — Kỳ quan Việt Nam",
        },
        {
          src: "/images/moments/google-arts-solo.jpg",
          caption: "Tại không gian trưng bày Google Arts & Culture",
        },
      ],
    },
    insights: {
      label: "Góc nhìn",
      heading: "Góc nhìn về Content, Creator & Growth",
      sub: "Vài quan điểm định hình cách tôi tiếp cận mỗi dự án.",
      items: [
        {
          quote: "Doanh nghiệp không thiếu content. Doanh nghiệp thiếu hệ thống.",
          body: "Rất nhiều thương hiệu đã có video, đã có bài đăng — nhưng chưa có một kiến trúc nội dung xuyên suốt để những mảnh ghép đó cộng hưởng với nhau.",
        },
        {
          quote: "Creator không chỉ là người đăng bài.",
          body: "Một Creator phù hợp có thể trở thành nhân vật, host, cộng tác viên sản xuất và một phần trong hệ sinh thái thương hiệu — không chỉ là một điểm phân phối một lần.",
        },
        {
          quote: "Chiến lược nội dung chỉ có giá trị khi có thể biến thành sản phẩm thực tế.",
          body: "Một bản định hướng hay vẫn cần được chuyển hóa qua sản xuất, hậu kỳ và phân phối thì mới tạo ra kết quả.",
        },
        {
          quote: "Một nội dung không nên được copy nguyên vẹn lên mọi nền tảng.",
          body: "Mỗi nền tảng có hành vi người xem riêng — cùng một câu chuyện cần được điều chỉnh hook, định dạng và độ dài khác nhau.",
        },
        {
          quote: "Làm thế nào để biến một ý tưởng thành một tài sản nội dung?",
          body: "Một ý tưởng chỉ trở thành tài sản khi được lặp lại có hệ thống — qua series, format và một Content IP có thể phát triển lâu dài.",
        },
        {
          quote: "Founder có thể biến chuyên môn thành một hệ thống nội dung như thế nào?",
          body: "Bắt đầu từ việc xác định điều Founder thực sự hiểu rõ nhất, sau đó xây dựng kiến trúc nội dung và kênh xoay quanh đúng chuyên môn đó.",
        },
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
      eyebrow: "Content Ecosystem Advisor & Partner",
      name: "HOANG NGUYEN",
      headline: "From idea to content ecosystem.",
      subheadline:
        "I help businesses build and grow multi-platform content channels — from brand direction, content strategy, and creator connections, to production, post-production, publishing, tracking, and growth optimization.",
      capabilityLine: "DIRECTION · CONTENT · CREATOR · PRODUCTION · MULTI-PLATFORM · OPTIMIZATION",
      ctaPrimary: "How I can help",
      ctaSecondary: "Talk about your project",
      subCredentials: [
        "Vice Chairman, HUB Network — Hanoi's Startup, Innovation & Digital Transformation Network",
        "Co-founder & Admin — Highnoy Group Parkour Vietnam",
      ],
      scrollHint: "Scroll to explore",
    },
    stats: [
      { value: "12+", label: "Years of experience" },
      { value: "3M+", label: "Cross-platform followers" },
      { value: "2B+", label: "Cumulative views" },
      { value: "200M+", label: "Campaign views / month" },
      { value: "20+", label: "Major brand partners" },
    ],
    trustedBy: {
      label: "Trusted by",
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
      ],
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
    ecosystem: {
      label: "How I work",
      heading: "I can be with you through the entire process.",
      sub: "Not one single link — the full value chain of a content ecosystem.",
      stages: [
        { number: "01", label: "Direction" },
        { number: "02", label: "Content" },
        { number: "03", label: "Creator" },
        { number: "04", label: "Production" },
        { number: "05", label: "Post-Production" },
        { number: "06", label: "Multi-Platform" },
        { number: "07", label: "Publishing" },
        { number: "08", label: "Tracking" },
        { number: "09", label: "Optimization" },
        { number: "10", label: "Growth" },
      ],
    },
    capabilities: {
      label: "Core capabilities",
      heading: "Seven links, one person standing between them.",
      sub: "Every capability below is one I've done directly — not just advised on paper.",
      items: [
        {
          number: "01",
          title: "Direction & Channel Building",
          headline: "A clear direction before investing in production.",
          body: "I help businesses define what a channel is built for, its audience, positioning, brand direction, content direction, the right platforms, the role of each platform, format, and long-term growth path.",
          result: "Result: a clear direction before investing in production.",
          image: "/images/pillars/1-cover.jpg",
        },
        {
          number: "02",
          title: "Content Strategy & Development",
          headline: "Turning scattered ideas into a structured system.",
          body: "I support content strategy, content pillars, content architecture, formats, series, scripts, content calendars, content IP, and creative direction.",
          result: "Result: scattered ideas turned into a structured content system.",
        },
        {
          number: "03",
          title: "Creator / KOL / KOC / Influencer",
          headline: "Connecting the right people to amplify content.",
          body: "I can connect with Creators, KOLs, KOCs, Influencers, hosts, experts, and communities — identifying the right fit, connecting, coordinating, and developing long-term collaborations. A Creator isn't just someone who posts an ad — they can become a character, a content maker, a host, a production collaborator, a distribution channel, part of a brand's ecosystem.",
          result: "Result: a collaboration network instead of one-off contracts.",
          image: "/images/moments/candid.jpg",
        },
        {
          number: "04",
          title: "Content Production",
          headline: "Turning ideas into real content.",
          body: "I can be involved in pre-production, production, creative direction, filming, coordinating Creators/talent, coordinating crews, content control, and output quality control. My value is understanding the whole process, knowing what a project needs, and connecting the right resources to execute it.",
          result: "Result: ideas executed true to the original direction.",
          image: "/images/pillars/2-cover.jpg",
        },
        {
          number: "05",
          title: "Post-Production & Packaging",
          headline: "From raw material to publish-ready content.",
          body: "I can direct and coordinate video editing, short-form, long-form, Reels, Shorts, motion, thumbnails, captions, subtitles, versioning, and adaptation.",
          result: "Result: one original piece of content adapted into multiple platform-ready versions.",
        },
        {
          number: "06",
          title: "Multi-Platform Distribution",
          headline: "One idea — many touchpoints.",
          body: "TikTok, YouTube, Facebook, Instagram, Reels, Shorts — never the same content copied onto every platform. Each platform needs its own hook, format, length, caption, thumbnail, and behavior fit.",
          result: "Result: every platform gets the version of content built for it.",
        },
        {
          number: "07",
          title: "Tracking & Optimization",
          headline: "Publishing isn't the finish line.",
          body: "Tracking views, watch time, retention, engagement, format, topic, Creator, and platform — through a cycle of analyze, adjust, test, optimize, and grow.",
          result: "Result: not just a few good videos, but a format that can grow long-term.",
        },
      ],
    },
    framework: {
      label: "Capability framework",
      heading: "Hoang Nguyen Content Ecosystem",
      sub: "Seven questions I always ask at the start of a content project.",
      stages: [
        { key: "STRATEGY", question: "What are we building?" },
        { key: "CONTENT", question: "What are we saying?" },
        { key: "CREATOR", question: "Who will create and amplify it?" },
        { key: "PRODUCTION", question: "How do we turn the idea into a product?" },
        { key: "DISTRIBUTION", question: "Where does it go?" },
        { key: "OPTIMIZATION", question: "What's working?" },
        { key: "GROWTH", question: "How do we keep growing it?" },
      ],
      center: "CONTENT ECOSYSTEM",
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
    chuongTailor: {
      eyebrow: "Featured Case Study",
      heading: "Chương Tailor",
      subheading: "From 2,000 to 12,000+ subscribers — Building and growing a multi-platform content system",
      problemLabel: "Problem",
      problem: [
        "When the engagement began, Chương Tailor's YouTube channel had around 2,000 subscribers.",
        "The problem wasn't simply producing more videos — it was finding the right content direction so the brand could build a stronger presence in the digital space.",
        "Hoàng Nguyễn advised and worked alongside the team on content direction, production, filming, publishing, tracking, and optimization.",
      ],
      roleLabel: "Role",
      roleHeading: "From strategy to execution",
      roleFlow: "Content direction → Idea development → Production & filming → Post-production → Publishing → Multi-platform → Tracking → Optimization",
      roleBody: "Not just providing strategy, but directly involved in turning that strategy into real content.",
      process: [
        {
          number: "01",
          title: "Direction",
          body: "Analyzed the channel's current state and defined a content direction fit for the Chương Tailor brand. Focused on finding:",
          bullets: [
            "The right topics",
            "A way of storytelling",
            "Format",
            "A content growth direction",
            "How the brand shows up in the digital space",
          ],
        },
        {
          number: "02",
          title: "Content Development",
          body: "Advised on and developed a content system instead of producing standalone videos.",
          flow: "Idea → Format → Series → Script → Production",
          note: "The goal was content that expressed the brand's values while fitting viewer behavior.",
        },
        {
          number: "03",
          title: "Production & Filming",
          body: "Worked alongside the team turning ideas into reality:",
          bullets: [
            "Direction set before filming",
            "Concept development",
            "Filming",
            "Crew coordination",
            "Production coordination",
            "Keeping content aligned with direction",
          ],
        },
        {
          number: "04",
          title: "Post-Production & Packaging",
          body: "Turned raw footage into publish-ready content. Optimized:",
          bullets: [
            "Hook",
            "Pacing",
            "Storytelling",
            "Captions",
            "Thumbnails",
            "Short-form",
            "Long-form",
            "Platform-specific versions",
          ],
        },
        {
          number: "05",
          title: "Publishing & Multi-Platform Growth",
          body: "Not just YouTube. Content was developed and distributed across multiple platforms to expand touchpoints with the audience.",
          flow: "YouTube · Facebook · TikTok · Instagram",
          note: "Each platform's packaging was adjusted to fit its own user behavior.",
        },
        {
          number: "06",
          title: "Tracking & Optimization",
          body: "After publishing, kept tracking performance to identify:",
          bullets: [
            "Which content was working",
            "Which formats had potential",
            "Which topics engaged the audience",
            "What needed adjusting",
          ],
          flow: "Track → Analyze → Optimize → Test → Grow",
        },
      ],
      resultsHeading: "Results after 3 months",
      growth: {
        start: "2,000+",
        startLabel: "Starting subscribers",
        added: "+10,000",
        addedLabel: "New subscribers",
        end: "12,000+",
        endLabel: "Subscribers",
      },
      growthBody:
        "After 3 months of content advisory, the YouTube channel gained roughly 10,000 subscribers, growing from around 2,000 to over 12,000.",
      metrics: [
        {
          value: "500,000+",
          label: "YouTube views",
          body: "The advised and developed content reached over 500,000 views on YouTube during this period.",
        },
        {
          value: "1,000,000+",
          label: "Reach / engagement across platforms",
          body: "Once expanded across platforms, Chương Tailor's content system generated over 1 million interactions/reach across the multi-platform ecosystem.",
        },
      ],
      keyResultLabel: "Key Result",
      keyResult: [
        "+10,000 subscribers in 3 months.",
        "From a 2,000-subscriber channel",
        "→ built new growth momentum for the content system.",
      ],
      keyMessage: ["Not just making videos.", "Finding how content grows."],
      cover: "/images/case-studies/chuong-tailor-cover.jpg",
    },
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
      heading: "Marks made in the real world",
      sub: "From global platform headquarters to KOL forums and production sets.",
      viewAll: "View all",
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
          src: "/images/moments/award-event.jpg",
          caption: "Recognized at national KOL & digital-transformation forums",
        },
        {
          src: "/images/moments/ballroom.jpg",
          caption: "The venue for the KOL Conference — launch of the Hanoi Digital Trust Club",
        },
        {
          src: "/images/moments/trophy.jpg",
          caption: "With partners at the KOL Conference, co-organized with VCCorp",
        },
        {
          src: "/images/moments/consulting-2.jpg",
          caption: "A content strategy working session with the Thăng Long Cars team",
        },
        {
          src: "/images/moments/filmset-1.jpg",
          caption: "Behind the scenes on \"Đèn Âm Hồn – Bà Đừng Buồn Con\"",
        },
        {
          src: "/images/moments/filmset-2.jpg",
          caption: "With the film crew in Hanoi's Old Quarter",
        },
        {
          src: "/images/moments/filmset-3.jpg",
          caption: "On set for \"Đèn Âm Hồn – Bà Đừng Buồn Con\"",
        },
        {
          src: "/images/moments/denamhon-hoangnam.jpg",
          caption: "With director Hoàng Nam during production of \"Đèn Âm Hồn – Bà Đừng Buồn Con\"",
        },
        {
          src: "/images/moments/google-arts-group.jpg",
          caption: "With the delegation at the Google Arts & Culture — Wonders of Vietnam event",
        },
        {
          src: "/images/moments/google-arts-solo.jpg",
          caption: "At the Google Arts & Culture exhibition space",
        },
      ],
    },
    insights: {
      label: "Insights",
      heading: "Perspective on Content, Creators & Growth",
      sub: "A few beliefs that shape how I approach every project.",
      items: [
        {
          quote: "Businesses don't lack content. They lack a system.",
          body: "Many brands already have videos and posts — what's missing is a content architecture that lets those pieces reinforce each other.",
        },
        {
          quote: "A Creator isn't just someone who posts.",
          body: "The right Creator can become a character, a host, a production collaborator, and part of a brand's ecosystem — not just a one-off distribution point.",
        },
        {
          quote: "A content strategy is only worth something once it becomes a real product.",
          body: "A great direction still has to move through production, post-production, and distribution before it produces a result.",
        },
        {
          quote: "The same content shouldn't be copied onto every platform.",
          body: "Every platform has its own viewer behavior — the same story needs a different hook, format, and length on each one.",
        },
        {
          quote: "How do you turn an idea into a content asset?",
          body: "An idea only becomes an asset once it's repeated systematically — through a series, a format, and a Content IP that can keep growing.",
        },
        {
          quote: "How can a Founder turn their expertise into a content system?",
          body: "Start by identifying what the Founder genuinely understands best, then build the content architecture and channels around that exact expertise.",
        },
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
