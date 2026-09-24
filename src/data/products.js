export const products = [
  // ===================== STORE 1 — Computers & Components =====================
  {
    id: "product-1",
    storeId: "store-1",
    sellerId: "user-1",
    name: "ASUS ROG Strix G16",
    category: "Laptop",
    image: [
      "https://dlcdnwebimgs.asus.com/gain/E20134EE-F6B3-4AB7-A1B5-73795E91011D/w1000/h732",
      "https://dlcdnwebimgs.asus.com/files/media/71a33ba1-1be2-44c1-9541-70b4c800abf8/v1/images/Strix_G16_KV_16x9_p-2000.webp",
      "https://dlcdnwebimgs.asus.com/gain/43B48C53-DA14-4E0D-9DAE-1268F8EC3A19/w1000/h732",
      "https://www.notebookcheck.net/fileadmin/Notebooks/Asus/ROG_Strix_G16_G615/rog_strix_g16_g615_case_13.JPG",
    ],
    description:
      "The ASUS ROG Strix G16 is built for gamers and creators who need serious horsepower without compromise. Powered by an Intel Core i7-13650HX processor paired with NVIDIA GeForce RTX 4060 graphics, it tears through AAA titles, competitive shooters, and creative workloads like video editing and 3D rendering with ease.\n\nThe 16-inch high refresh rate display keeps fast-paced action smooth and responsive, while 16GB of DDR5 memory and a spacious 1TB NVMe SSD ensure quick load times and effortless multitasking. An advanced cooling system keeps thermals in check even during extended gaming sessions.\n\nWith a durable chassis, RGB backlit keyboard, and reliable Wi-Fi connectivity, the ROG Strix G16 is equally at home in a LAN party, a dorm room, or a home office — a versatile machine for gaming, programming, and everyday productivity.",
    features: [
      "Intel Core i7-13650HX processor for demanding multitasking",
      "NVIDIA GeForce RTX 4060 graphics with ray tracing support",
      "16-inch high refresh rate gaming display",
      "16GB DDR5 RAM with room to upgrade",
      "1TB NVMe SSD for fast boot and load times",
      "RGB backlit keyboard with customizable lighting",
      "Advanced multi-fan cooling system",
    ],
    specifications: [
      { name: "Processor", value: "Intel Core i7-13650HX" },
      { name: "Graphics", value: "NVIDIA GeForce RTX 4060" },
      { name: "RAM", value: "16GB DDR5" },
      { name: "Storage", value: "1TB NVMe SSD" },
      { name: "Display", value: "16-inch, High Refresh Rate" },
      { name: "Keyboard", value: "RGB Backlit" },
      { name: "Connectivity", value: "Wi-Fi 6" },
    ],
    variants: [
      { id: "variant-1", name: "Black | 16GB RAM | 1TB SSD | RTX 4060", price: 24999000, stock: 3 },
      { id: "variant-2", name: "Black | 32GB RAM | 1TB SSD | RTX 4060", price: 26999000, stock: 3 },
      { id: "variant-3", name: "Black | 32GB RAM | 1TB SSD | RTX 4070", price: 29999000, stock: 2 },
    ],
  },

  {
    id: "product-2",
    storeId: "store-1",
    sellerId: "user-1",
    name: "Lenovo Legion 5",
    category: "Laptop",
    image:
      "https://p2-ofp.static.pub/ShareResource/optimized/pdp/legion/legion-5-series/len101g0047/lenovo-legion-5-gen-10-15-amd-pdp-hero.png?width=584&height=584",
    description:
      "The Lenovo Legion 5 pairs an AMD Ryzen 7 7840HS processor with NVIDIA GeForce RTX 4060 graphics for a gaming laptop that stays cool under pressure. Its high refresh rate panel makes fast-paced gameplay feel fluid, while efficient thermal management keeps performance steady through long sessions.\n\n16GB of DDR5 RAM and a 1TB NVMe SSD give you plenty of headroom for modern games, creative apps, and everyday multitasking. The full-size keyboard is comfortable for long typing sessions, whether you are gaming, coding, or writing.\n\nBuilt with a durable chassis and fast wireless connectivity, the Legion 5 is a dependable all-rounder for gaming, streaming, software development, and content creation.",
    features: [
      "AMD Ryzen 7 7840HS processor",
      "NVIDIA GeForce RTX 4060 graphics",
      "High refresh rate gaming display",
      "16GB DDR5 RAM and 1TB NVMe SSD",
      "Efficient dual-fan thermal management",
      "Full-size comfortable keyboard",
      "High-speed wireless connectivity",
    ],
    specifications: [
      { name: "Processor", value: "AMD Ryzen 7 7840HS" },
      { name: "Graphics", value: "NVIDIA GeForce RTX 4060" },
      { name: "RAM", value: "16GB DDR5" },
      { name: "Storage", value: "1TB NVMe SSD" },
      { name: "Display", value: "15-inch, High Refresh Rate" },
      { name: "Connectivity", value: "Wi-Fi 6E" },
    ],
    variants: [
      { id: "variant-1", name: "Storm Gray | 16GB RAM | 1TB SSD | RTX 4060", price: 21999000, stock: 5 },
      { id: "variant-2", name: "Storm Gray | 32GB RAM | 1TB SSD | RTX 4060", price: 23999000, stock: 4 },
      { id: "variant-3", name: "Onyx Gray | 32GB RAM | 1TB SSD | RTX 4070", price: 26999000, stock: 3 },
    ],
  },

  {
    id: "product-3",
    storeId: "store-1",
    sellerId: "user-1",
    name: "Acer Nitro V 15",
    category: "Laptop",
    image:
      "https://images.acer.com/is/image/acer/acer-nitro-v-15-anv15-52-non-fingerprint-with-backlit-on-wp-logo-black-01?$Product-Cards-XL$",
    description:
      "The Acer Nitro V 15 delivers a great entry point into serious gaming, powered by an Intel Core i5-13420H processor and NVIDIA GeForce RTX 4050 graphics. The high refresh rate display and DDR5 memory keep games looking sharp and running smoothly.\n\nFast NVMe SSD storage cuts down load times, while the dual-fan cooling system keeps the system comfortable during marathon sessions. An RGB backlit keyboard adds a bit of flair for late-night gaming.\n\nWith its gaming-focused chassis and solid connectivity, the Nitro V 15 is a great fit for students, casual gamers, and anyone who wants reliable performance for gaming, programming, and multimedia editing on a budget.",
    features: [
      "Intel Core i5-13420H processor",
      "NVIDIA GeForce RTX 4050 graphics",
      "High refresh rate gaming display",
      "Fast DDR5 memory and NVMe SSD storage",
      "RGB backlit keyboard",
      "Dual-fan cooling system",
    ],
    specifications: [
      { name: "Processor", value: "Intel Core i5-13420H" },
      { name: "Graphics", value: "NVIDIA GeForce RTX 4050" },
      { name: "RAM", value: "16GB DDR5" },
      { name: "Storage", value: "512GB – 1TB NVMe SSD" },
      { name: "Display", value: "15-inch, High Refresh Rate" },
      { name: "Connectivity", value: "Wi-Fi 6" },
    ],
    variants: [
      { id: "variant-1", name: "Obsidian Black | 16GB RAM | 512GB SSD | RTX 4050", price: 13999000, stock: 6 },
      { id: "variant-2", name: "Obsidian Black | 16GB RAM | 1TB SSD | RTX 4050", price: 14999000, stock: 5 },
      { id: "variant-3", name: "Obsidian Black | 32GB RAM | 1TB SSD | RTX 4060", price: 17999000, stock: 4 },
    ],
  },

  {
    id: "product-4",
    storeId: "store-1",
    sellerId: "user-1",
    name: "MSI Katana 15",
    category: "Laptop",
    image:
      "https://storage-asset.msi.com/global/picture/product/product_168992322098c560c8d61e7361c1d135fe5b39c7f0.webp",
    description:
      "MSI's Katana 15 combines an Intel Core i7-13620H processor with NVIDIA GeForce RTX 4060 graphics for a performance-oriented gaming laptop that doesn't cut corners. The high refresh rate display makes gameplay feel smooth and responsive across a wide range of titles.\n\n16GB of DDR5 memory and a 1TB NVMe SSD provide fast, reliable performance for gaming, streaming, and everyday multitasking, while the enhanced cooling system keeps temperatures under control even during extended play.\n\nFinished with an RGB gaming keyboard and MSI's signature performance-focused design, the Katana 15 is well suited for gaming, 3D applications, video editing, and demanding creative workloads.",
    features: [
      "Intel Core i7-13620H processor",
      "NVIDIA GeForce RTX 4060 graphics",
      "High refresh rate display",
      "16GB DDR5 memory and 1TB NVMe SSD",
      "RGB gaming keyboard",
      "Enhanced cooling system for sustained performance",
    ],
    specifications: [
      { name: "Processor", value: "Intel Core i7-13620H" },
      { name: "Graphics", value: "NVIDIA GeForce RTX 4060" },
      { name: "RAM", value: "16GB DDR5" },
      { name: "Storage", value: "1TB NVMe SSD" },
      { name: "Display", value: "15.6-inch, High Refresh Rate" },
      { name: "Connectivity", value: "Wi-Fi 6" },
    ],
    variants: [
      { id: "variant-1", name: "Black | 16GB RAM | 1TB SSD | RTX 4060", price: 18499000, stock: 3 },
      { id: "variant-2", name: "Black | 32GB RAM | 1TB SSD | RTX 4060", price: 20499000, stock: 2 },
      { id: "variant-3", name: "Black | 32GB RAM | 1TB SSD | RTX 4070", price: 23499000, stock: 2 },
    ],
  },

  {
    id: "product-5",
    storeId: "store-1",
    sellerId: "user-1",
    name: "AMD Ryzen 7 7800X3D",
    category: "Processor",
    image:
      "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-7-7800x3d-front.jpg",
    description:
      "The AMD Ryzen 7 7800X3D is built for gamers who demand the very best frame rates. Its 3D V-Cache technology dramatically boosts gaming performance by giving the CPU a much larger, faster cache to work with, resulting in smoother, more consistent gameplay.\n\nWith 8 cores and 16 threads running up to 5.0GHz boost clock, the 7800X3D handles both gaming and everyday productivity with ease. The AM5 socket ensures compatibility with the latest DDR5 memory platforms and future upgrade paths.\n\nWhether you're chasing competitive frame rates, developing games, or running demanding desktop applications, the 7800X3D delivers class-leading gaming performance in an efficient package.",
    features: [
      "8 cores and 16 threads for gaming and multitasking",
      "AMD 3D V-Cache technology for a major gaming performance boost",
      "Boost clock speeds up to 5.0GHz",
      "AM5 socket with DDR5 memory support",
      "Efficient power architecture",
    ],
    specifications: [
      { name: "Cores / Threads", value: "8 Cores / 16 Threads" },
      { name: "Boost Clock", value: "Up to 5.0GHz" },
      { name: "Socket", value: "AM5" },
      { name: "Cache Technology", value: "AMD 3D V-Cache" },
      { name: "Memory Support", value: "DDR5" },
    ],
    variants: [
      { id: "variant-1", name: "8 Core | 16 Thread | Up to 5.0GHz | AM5", price: 6499000, stock: 4 },
      { id: "variant-2", name: "8 Core | 16 Thread | Boxed Processor | AM5", price: 6599000, stock: 3 },
      { id: "variant-3", name: "8 Core | 16 Thread | Gaming Edition | AM5", price: 6999000, stock: 3 },
    ],
  },

  {
    id: "product-6",
    storeId: "store-1",
    sellerId: "user-1",
    name: "Intel Core i5-14600K",
    category: "Processor",
    image:
      "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2023/10/22/7da52113-f4a2-474f-85d1-1b89cd36ccf4.jpg~tplv-aphluv4xwc-white-pad-v1:250:250.jpg",
    description:
      "The Intel Core i5-14600K brings a 14-core hybrid architecture to the mid-to-high-end desktop segment, blending performance and efficiency cores to handle gaming, streaming, and productivity workloads with ease. Boost clocks reaching up to 5.3GHz keep single-threaded tasks and games running fast.\n\nWith 20 threads on tap, the i5-14600K excels at multitasking-heavy scenarios like streaming while gaming, video editing, or compiling code. The LGA1700 socket keeps it compatible with a wide range of current-generation motherboards.\n\nA well-rounded choice for gamers and creators alike, the i5-14600K delivers strong performance across gaming, programming, video editing, and 3D workloads without breaking the bank.",
    features: [
      "14-core hybrid architecture (Performance + Efficiency cores)",
      "20 threads for heavy multitasking",
      "Boost clock speeds up to 5.3GHz",
      "LGA1700 socket for broad motherboard compatibility",
      "Strong gaming and productivity performance",
    ],
    specifications: [
      { name: "Cores / Threads", value: "14 Cores / 20 Threads" },
      { name: "Boost Clock", value: "Up to 5.3GHz" },
      { name: "Socket", value: "LGA1700" },
      { name: "Architecture", value: "Intel Hybrid (P-core + E-core)" },
    ],
    variants: [
      { id: "variant-1", name: "14 Core | 20 Thread | Up to 5.3GHz | LGA1700", price: 5199000, stock: 5 },
      { id: "variant-2", name: "14 Core | 20 Thread | Boxed Processor | LGA1700", price: 5299000, stock: 5 },
      { id: "variant-3", name: "14 Core | 20 Thread | Performance Mode | LGA1700", price: 5599000, stock: 4 },
    ],
  },

  {
    id: "product-7",
    storeId: "store-1",
    sellerId: "user-1",
    name: "NVIDIA GeForce RTX 4070 Super",
    category: "Graphics Card",
    image:
      "https://storage-asset.msi.com/global/picture/product/product_1704703822984da48f4e57873dd8ba9f899f1df6ac.webp",
    description:
      "The NVIDIA GeForce RTX 4070 Super brings serious 1440p and high-end gaming performance with 12GB of GDDR6X VRAM and NVIDIA's RTX architecture. Real-time ray tracing and DLSS support let you enjoy stunning visuals without sacrificing frame rates.\n\nHigh-performance CUDA cores accelerate everything from gaming to AI workloads and creative applications like 3D rendering and video editing. The advanced multi-fan cooling design keeps the card running cool and quiet even under sustained load.\n\nWhether you're building a new gaming rig or upgrading an aging GPU, the RTX 4070 Super is a strong choice for high-resolution gaming, ray-traced visuals, and professional creative work.",
    features: [
      "12GB GDDR6X VRAM",
      "NVIDIA RTX architecture with real-time ray tracing",
      "DLSS support for boosted frame rates",
      "High-performance CUDA cores for gaming and AI workloads",
      "Advanced multi-fan cooling system",
    ],
    specifications: [
      { name: "VRAM", value: "12GB GDDR6X" },
      { name: "Ray Tracing", value: "Supported (RTX)" },
      { name: "DLSS", value: "Supported" },
      { name: "Interface", value: "PCIe 4.0" },
      { name: "Cooling", value: "Dual / Triple Fan" },
    ],
    variants: [
      { id: "variant-1", name: "12GB GDDR6X | Triple Fan | Black", price: 10999000, stock: 2 },
      { id: "variant-2", name: "12GB GDDR6X | Dual Fan | Black", price: 10699000, stock: 2 },
      { id: "variant-3", name: "12GB GDDR6X | OC Edition | Triple Fan", price: 11599000, stock: 2 },
    ],
  },

  {
    id: "product-8",
    storeId: "store-1",
    sellerId: "user-1",
    name: "Kingston Fury Beast 32GB",
    category: "RAM",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPkGTiDMY6FZz2kHyZ5IRvysaZuMUxPT_ogp8DlQQj3yVHL5TnML8RFys&s=10",
    description:
      "Kingston Fury Beast 32GB DDR5 memory delivers a solid boost to gaming rigs and workstation builds alike. The dual-channel 2x16GB configuration ensures smooth, stable performance across everything from AAA games to heavy multitasking.\n\nHigh memory frequency and low-latency timings help reduce bottlenecks in CPU-intensive tasks, while the low-profile heatsink design keeps temperatures in check without getting in the way of large CPU coolers.\n\nA dependable upgrade for gaming PCs, content creation rigs, and virtualization-heavy workstations that need fast, reliable memory.",
    features: [
      "32GB total capacity in dual-channel 2x16GB kit",
      "DDR5 memory technology",
      "High frequency for reduced bottlenecks",
      "Low-latency CL36/CL32 timings depending on variant",
      "Gaming-oriented low-profile heatsink",
    ],
    specifications: [
      { name: "Capacity", value: "32GB (2x16GB)" },
      { name: "Memory Type", value: "DDR5" },
      { name: "Speed", value: "5600MHz – 6400MHz" },
      { name: "Latency", value: "CL32 – CL36" },
    ],
    variants: [
      { id: "variant-1", name: "DDR5 5600MHz | 2x16GB | CL36 | Black", price: 1399000, stock: 10 },
      { id: "variant-2", name: "DDR5 6000MHz | 2x16GB | CL36 | Black", price: 1499000, stock: 8 },
      { id: "variant-3", name: "DDR5 6400MHz | 2x16GB | CL32 | Black", price: 1699000, stock: 7 },
    ],
  },

  {
    id: "product-9",
    storeId: "store-1",
    sellerId: "user-1",
    name: "Samsung 990 Pro",
    category: "Storage",
    image:
      "https://toko.nale.co.id/wp-content/uploads/2024/12/0011648_samsung-1tb-m2-990-pro-pcie-40nvme-ssd-black_500.jpeg",
    description:
      "The Samsung 990 Pro is a high-performance PCIe 4.0 NVMe SSD designed for gamers and creators who need lightning-fast storage. Its high sequential read performance dramatically cuts down load times for games, applications, and large file transfers.\n\nHoused in a compact M.2 form factor, the 990 Pro fits neatly into laptops and desktops alike, with an available heatsink variant for improved thermal management during sustained heavy workloads.\n\nWhether you're installing your operating system, building a gaming rig, or working with large creative project files, the 990 Pro delivers the speed and reliability modern workflows demand.",
    features: [
      "PCIe 4.0 NVMe interface for high-speed data transfer",
      "High sequential read and write performance",
      "Compact M.2 2280 form factor",
      "Optional heatsink variant for better thermals",
      "Reliable, durable storage architecture",
    ],
    specifications: [
      { name: "Interface", value: "PCIe 4.0 NVMe" },
      { name: "Form Factor", value: "M.2 2280" },
      { name: "Capacity", value: "1TB – 2TB" },
      { name: "Thermal Solution", value: "Standard / Heatsink" },
    ],
    variants: [
      { id: "variant-1", name: "1TB | PCIe 4.0 NVMe | Heatsink", price: 1899000, stock: 8 },
      { id: "variant-2", name: "1TB | PCIe 4.0 NVMe | Standard", price: 1799000, stock: 7 },
      { id: "variant-3", name: "2TB | PCIe 4.0 NVMe | Heatsink", price: 3299000, stock: 5 },
    ],
  },

  {
    id: "product-10",
    storeId: "store-1",
    sellerId: "user-1",
    name: "ASUS TUF Gaming 27",
    category: "Monitor",
    image:
      "https://dlcdnwebimgs.asus.com/gain/8be42c75-720a-4352-96cc-e5fe8f05abe6/",
    description:
      "The ASUS TUF Gaming 27 is a 27-inch QHD monitor built to keep pace with competitive gaming. Depending on the variant, refresh rates run as high as 240Hz, paired with a fast 1ms response time to keep fast-moving action crisp and blur-free.\n\nThe IPS panel delivers accurate colors and wide viewing angles, making it just as capable for content consumption and photo editing as it is for gaming. Adaptive sync support helps eliminate screen tearing during intense gameplay.\n\nBacked by ASUS's durable TUF Gaming construction, this monitor is a great fit for competitive gamers, office workers, and anyone who wants a sharp, responsive display.",
    features: [
      "27-inch QHD IPS panel",
      "Refresh rate up to 240Hz depending on variant",
      "1ms response time for minimal motion blur",
      "Adaptive synchronization support",
      "Durable TUF Gaming build quality",
    ],
    specifications: [
      { name: "Screen Size", value: "27 inches" },
      { name: "Resolution", value: "QHD (2560x1440)" },
      { name: "Panel Type", value: "IPS" },
      { name: "Refresh Rate", value: "165Hz – 240Hz" },
      { name: "Response Time", value: "1ms" },
    ],
    variants: [
      { id: "variant-1", name: "27-inch | QHD | 165Hz | 1ms | IPS", price: 4299000, stock: 4 },
      { id: "variant-2", name: "27-inch | QHD | 180Hz | 1ms | IPS", price: 4499000, stock: 3 },
      { id: "variant-3", name: "27-inch | QHD | 240Hz | 1ms | IPS", price: 4999000, stock: 2 },
    ],
  },

  {
    id: "product-11",
    storeId: "store-1",
    sellerId: "user-1",
    name: "Corsair RM850e",
    category: "Power Supply",
    image: "https://blossomzones.com/wp-content/uploads/2019/07/rm850e.jpg",
    description:
      "The Corsair RM850e delivers stable, efficient power for demanding gaming PCs and workstations. With 80 Plus Gold efficiency and up to 850W of output, it comfortably powers modern high-end graphics cards and multi-component builds.\n\nFully modular cabling keeps builds tidy by letting you connect only the cables you need, while native ATX 3.0 and PCIe support ensure compatibility with the latest GPUs and their power connectors.\n\nA quiet cooling fan and compact chassis round out a power supply built for reliability, efficiency, and clean cable management in any modern build.",
    features: [
      "Up to 850W continuous power output",
      "80 Plus Gold certified efficiency",
      "Fully modular cable design",
      "Native ATX 3.0 and PCIe 5.0 support",
      "Quiet, temperature-controlled cooling fan",
    ],
    specifications: [
      { name: "Wattage", value: "750W – 850W" },
      { name: "Efficiency Rating", value: "80 Plus Gold" },
      { name: "Modularity", value: "Fully Modular" },
      { name: "Form Factor", value: "ATX / ATX 3.0" },
    ],
    variants: [
      { id: "variant-1", name: "850W | 80+ Gold | Fully Modular | ATX 3.0", price: 2199000, stock: 5 },
      { id: "variant-2", name: "850W | 80+ Gold | Fully Modular | Black", price: 2149000, stock: 3 },
      { id: "variant-3", name: "750W | 80+ Gold | Fully Modular | ATX 3.0", price: 1899000, stock: 3 },
    ],
  },

  {
    id: "product-12",
    storeId: "store-1",
    sellerId: "user-1",
    name: "NZXT H5 Flow",
    category: "PC Case",
    image:
      "https://nzxt.com/cdn/shop/files/h5-flow-h5-flow-primary-lg.png?v=1744861607&width=2000",
    description:
      "The NZXT H5 Flow is a mid-tower case designed around airflow, with a mesh front panel that keeps components cool without sacrificing style. Its ATX motherboard support and spacious interior make it easy to fit high-end components and generous cooling setups.\n\nA tempered glass side panel shows off your build, while thoughtful cable management channels keep everything tidy behind the scenes. Multiple cooling options let you tailor the case to air or liquid cooling setups.\n\nWith its clean, minimalist styling, the H5 Flow suits gaming PCs, productivity workstations, and RGB-focused builds alike.",
    features: [
      "Mid-tower ATX form factor",
      "Airflow-optimized mesh front panel",
      "Tempered glass side panel",
      "Modern cable management design",
      "Support for multiple radiator and fan configurations",
    ],
    specifications: [
      { name: "Form Factor", value: "Mid Tower" },
      { name: "Motherboard Support", value: "ATX / mATX / ITX" },
      { name: "Side Panel", value: "Tempered Glass" },
      { name: "Front Panel", value: "Mesh (Airflow)" },
    ],
    variants: [
      { id: "variant-1", name: "Mid Tower | ATX | Black | Tempered Glass", price: 1399000, stock: 7 },
      { id: "variant-2", name: "Mid Tower | ATX | White | Tempered Glass", price: 1399000, stock: 6 },
      { id: "variant-3", name: "Mid Tower | mATX/ATX | Black | Mesh Front", price: 1449000, stock: 5 },
    ],
  },

  // ===================== STORE 2 — Mobile Devices & Accessories =====================
  {
    id: "product-13",
    storeId: "store-2",
    sellerId: "user-2",
    name: "Samsung Galaxy S25",
    category: "Smartphone",
    image:
      "https://images.samsung.com/id/smartphones/galaxy-s25-ultra/buy/product_color_silverBlue_MO.png?imbypass=true",
    description:
      "The Samsung Galaxy S25 packs flagship performance into a sleek, premium design. Its AMOLED display with a high refresh rate makes everything from scrolling to gaming feel silky smooth, while 12GB of RAM keeps multitasking effortless.\n\nA multi-camera system captures detailed, vibrant photos in nearly any lighting condition, and fast charging keeps you topped up and ready to go. 5G connectivity ensures you stay fast and connected wherever you are.\n\nBacked by Samsung's latest Android software features, the Galaxy S25 is a capable everyday companion for productivity, photography, gaming, and streaming.",
    features: [
      "12GB RAM for smooth multitasking",
      "AMOLED display with high refresh rate",
      "Multi-camera system for versatile photography",
      "5G connectivity",
      "Fast charging support",
      "Latest Android software features",
    ],
    specifications: [
      { name: "RAM", value: "12GB" },
      { name: "Storage", value: "256GB – 512GB" },
      { name: "Display", value: "AMOLED, High Refresh Rate" },
      { name: "Connectivity", value: "5G" },
      { name: "Camera", value: "Multi-camera system" },
    ],
    variants: [
      { id: "variant-1", name: "Silver | 12GB RAM | 256GB | 5G", price: 12999000, stock: 4 },
      { id: "variant-2", name: "Navy | 12GB RAM | 256GB | 5G", price: 12999000, stock: 3 },
      { id: "variant-3", name: "Silver | 12GB RAM | 512GB | 5G", price: 14499000, stock: 3 },
    ],
  },

  {
    id: "product-14",
    storeId: "store-2",
    sellerId: "user-2",
    name: "iPhone 16",
    category: "Smartphone",
    image: "https://cdn.antaranews.com/cache/1200x800/2024/09/10/1000233682.jpg",
    description:
      "The iPhone 16 brings Apple's A18 chip and a stunning Super Retina XDR display together in a refined aluminum design. Whether you're gaming, editing photos, or multitasking across apps, performance stays fast and fluid.\n\nAn advanced dual-camera system captures detailed photos and smooth video, while Face ID keeps your device secure without slowing you down. USB-C connectivity makes charging and data transfer simple across your devices.\n\nWith 5G connectivity and long-term software support, the iPhone 16 is built to stay fast, secure, and up to date for years of everyday use — from social media to productivity to mobile gaming.",
    features: [
      "Apple A18 chip for fast, efficient performance",
      "Super Retina XDR display",
      "Advanced dual-camera system",
      "Face ID for secure authentication",
      "USB-C connectivity",
      "5G connectivity and long-term software support",
    ],
    specifications: [
      { name: "Chip", value: "Apple A18" },
      { name: "Storage", value: "128GB – 256GB" },
      { name: "Display", value: "Super Retina XDR" },
      { name: "Connectivity", value: "5G, USB-C" },
      { name: "Security", value: "Face ID" },
    ],
    variants: [
      { id: "variant-1", name: "Black | 128GB", price: 13999000, stock: 5 },
      { id: "variant-2", name: "White | 128GB", price: 13999000, stock: 4 },
      { id: "variant-3", name: "Black | 256GB", price: 15999000, stock: 3 },
      { id: "variant-4", name: "Blue | 256GB", price: 15999000, stock: 2 },
    ],
  },

  {
    id: "product-15",
    storeId: "store-2",
    sellerId: "user-2",
    name: "Google Pixel 9",
    category: "Smartphone",
    image: "https://buyfastgadgets.ng/wp-content/uploads/2025/10/Google-pixel-9-1.jpg",
    description:
      "The Google Pixel 9 puts Google's Tensor processor and AI-powered software front and center, delivering a clean, fast Android experience. Its OLED display with a high refresh rate makes everyday use feel smooth and responsive.\n\nComputational photography sets the Pixel 9 apart, producing sharp, well-balanced photos even in tricky lighting. 12GB of RAM keeps multitasking snappy, while 5G connectivity keeps you online wherever you go.\n\nWith AI-assisted features baked into the software, the Pixel 9 is a great pick for photography enthusiasts and anyone who wants a stock Android experience with smart, helpful tools.",
    features: [
      "Google Tensor processor with on-device AI",
      "OLED display with high refresh rate",
      "Advanced computational photography",
      "12GB RAM for smooth multitasking",
      "5G connectivity",
      "Clean, up-to-date Android experience",
    ],
    specifications: [
      { name: "Chipset", value: "Google Tensor" },
      { name: "RAM", value: "12GB" },
      { name: "Storage", value: "128GB – 256GB" },
      { name: "Display", value: "OLED, High Refresh Rate" },
      { name: "Connectivity", value: "5G" },
    ],
    variants: [
      { id: "variant-1", name: "Obsidian | 12GB RAM | 128GB | 5G", price: 10999000, stock: 3 },
      { id: "variant-2", name: "Porcelain | 12GB RAM | 128GB | 5G", price: 10999000, stock: 3 },
      { id: "variant-3", name: "Obsidian | 12GB RAM | 256GB | 5G", price: 12499000, stock: 2 },
    ],
  },

  {
    id: "product-16",
    storeId: "store-2",
    sellerId: "user-2",
    name: "Xiaomi 14T Pro",
    category: "Smartphone",
    image:
      "https://i02.appmifile.com/29_operator_sg/27/09/2024/22f8ea2494791d3811281f6cbdd69091.png",
    description:
      "The Xiaomi 14T Pro brings flagship-level performance to a competitive price point, powered by a high-end MediaTek processor and 12GB of RAM. Its AMOLED display with up to 144Hz refresh rate keeps games and everyday scrolling looking smooth.\n\n512GB of storage means you'll rarely worry about running out of space for apps, photos, and videos. The advanced camera system captures detailed photos and video, and fast charging technology gets you back to full power quickly.\n\nA premium design and strong graphics performance make the 14T Pro a great fit for gaming, photography, video recording, and everyday productivity.",
    features: [
      "Flagship MediaTek processor",
      "12GB RAM and 512GB storage",
      "AMOLED display with up to 144Hz refresh rate",
      "Advanced multi-camera system",
      "Fast charging technology",
      "5G connectivity",
    ],
    specifications: [
      { name: "Chipset", value: "MediaTek Flagship" },
      { name: "RAM / Storage", value: "12GB / 512GB" },
      { name: "Display", value: "AMOLED, up to 144Hz" },
      { name: "Connectivity", value: "5G" },
    ],
    variants: [
      { id: "variant-1", name: "Black | 12GB RAM | 512GB | 5G", price: 8999000, stock: 5 },
      { id: "variant-2", name: "Titanium Gray | 12GB RAM | 512GB | 5G", price: 8999000, stock: 5 },
      { id: "variant-3", name: "Blue | 12GB RAM | 512GB | 5G", price: 8999000, stock: 3 },
    ],
  },

  {
    id: "product-17",
    storeId: "store-2",
    sellerId: "user-2",
    name: "Samsung Galaxy Tab S10",
    category: "Tablet",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/id/feature/166052992/id-feature-silver-546089042?$550_N_JPG$",
    description:
      "The Samsung Galaxy Tab S10 is built for productivity and creativity, with a large AMOLED display and S Pen support for note-taking and drawing right out of the box. A powerful mobile processor and 12GB of RAM keep multitasking smooth, even across multiple windows.\n\nSelected variants add 5G connectivity for on-the-go productivity, while the premium metal design feels durable and refined. A large battery capacity keeps the tablet running through long work or study sessions.\n\nWhether you're sketching, taking notes, or catching up on entertainment, the Galaxy Tab S10 adapts to remote work, education, and creative projects alike.",
    features: [
      "Large AMOLED display",
      "S Pen support included",
      "12GB RAM for smooth multitasking",
      "5G connectivity on selected variants",
      "Multi-window multitasking",
      "Large battery capacity",
    ],
    specifications: [
      { name: "RAM", value: "12GB" },
      { name: "Storage", value: "256GB – 512GB" },
      { name: "Display", value: "AMOLED" },
      { name: "Stylus Support", value: "S Pen included" },
      { name: "Connectivity", value: "Wi-Fi / 5G" },
    ],
    variants: [
      { id: "variant-1", name: "Silver | 12GB RAM | 256GB | Wi-Fi", price: 12999000, stock: 2 },
      { id: "variant-2", name: "Gray | 12GB RAM | 256GB | 5G", price: 14499000, stock: 2 },
      { id: "variant-3", name: "Silver | 12GB RAM | 512GB | 5G", price: 16999000, stock: 2 },
    ],
  },

  {
    id: "product-18",
    storeId: "store-2",
    sellerId: "user-2",
    name: "iPad Air M3",
    category: "Tablet",
    image:
      "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/122241-122242-ipad-air-11inch-13inch-m3.png",
    description:
      "The iPad Air M3 brings serious performance to a slim, portable form factor, powered by Apple's M3 chip. Whether you're editing video, illustrating, or juggling multiple apps, the Air handles it with ease.\n\nThe Liquid Retina display looks sharp and vibrant, available in 11-inch or 13-inch sizes depending on how much screen real estate you need. Apple Pencil compatibility makes note-taking and sketching feel natural, while USB-C connectivity keeps accessories and transfers simple.\n\nLightweight yet powerful, the iPad Air M3 suits students, illustrators, and professionals who need a capable tablet for studying, productivity, and entertainment.",
    features: [
      "Apple M3 chip for high performance",
      "Liquid Retina display in 11-inch or 13-inch sizes",
      "Apple Pencil compatibility",
      "USB-C connectivity",
      "Slim, lightweight aluminum design",
    ],
    specifications: [
      { name: "Chip", value: "Apple M3" },
      { name: "Display", value: "Liquid Retina, 11\" / 13\"" },
      { name: "Storage", value: "128GB – 256GB" },
      { name: "Connectivity", value: "Wi-Fi, USB-C" },
      { name: "Stylus Support", value: "Apple Pencil" },
    ],
    variants: [
      { id: "variant-1", name: "Starlight | 11-inch | 128GB | Wi-Fi", price: 9999000, stock: 3 },
      { id: "variant-2", name: "Blue | 11-inch | 256GB | Wi-Fi", price: 11499000, stock: 2 },
      { id: "variant-3", name: "Purple | 11-inch | 256GB | Wi-Fi", price: 11499000, stock: 2 },
      { id: "variant-4", name: "Starlight | 13-inch | 256GB | Wi-Fi", price: 13999000, stock: 2 },
    ],
  },

  {
    id: "product-19",
    storeId: "store-2",
    sellerId: "user-2",
    name: "Anker 737 Power Bank",
    category: "Power Bank",
    image:
      "https://www.ankerindonesia.com/cdn/shop/products/2f99a15b-3ab5-40df-9903-d95daaa4ab0f-a1289011-anker-737-power-bank-powercore-24k-black-3.jpg?v=1709834663&width=1445",
    description:
      "The Anker 737 Power Bank packs a massive 24,000mAh battery into a portable package, ready to keep your phone, tablet, and even compatible laptops charged on the go. High-power USB-C output means fast charging when you need it most.\n\nIntelligent power management distributes charge efficiently across multiple connected devices, while the built-in digital display lets you keep an eye on remaining battery at a glance.\n\nA reliable travel companion for remote work, long commutes, and outdoor adventures where wall outlets are hard to come by.",
    features: [
      "24,000mAh battery capacity",
      "High-power USB-C output",
      "Multi-device charging support",
      "Intelligent power management",
      "Built-in digital battery display",
    ],
    specifications: [
      { name: "Capacity", value: "24,000mAh" },
      { name: "Output", value: "Up to 140W (USB-C PD)" },
      { name: "Ports", value: "USB-C, USB-A" },
      { name: "Display", value: "Digital battery indicator" },
    ],
    variants: [
      { id: "variant-1", name: "Black | 24000mAh | 140W", price: 1699000, stock: 8 },
      { id: "variant-2", name: "Black | 24000mAh | 100W", price: 1499000, stock: 8 },
      { id: "variant-3", name: "Black | 24000mAh | Digital Display", price: 1799000, stock: 6 },
    ],
  },

  {
    id: "product-20",
    storeId: "store-2",
    sellerId: "user-2",
    name: "Samsung 45W Travel Adapter",
    category: "Charger",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/id/feature/165265316/id-feature-supercharge-your-devices-541426736?$FB_TYPE_A_MO_JPG$",
    description:
      "The Samsung 45W Travel Adapter delivers fast, efficient charging in a compact, travel-friendly design. USB-C Power Delivery support means quicker top-ups for phones, tablets, and other compatible devices.\n\nIts lightweight construction makes it easy to toss in a bag or pocket, while efficient power management helps protect your devices during charging.\n\nA practical everyday charger for smartphones, tablets, and portable gaming devices that support USB-C fast charging.",
    features: [
      "Up to 45W charging output",
      "USB-C Power Delivery support",
      "Compact, travel-friendly design",
      "Broad compatibility with USB-C devices",
      "Efficient power management",
    ],
    specifications: [
      { name: "Output", value: "25W – 45W" },
      { name: "Port Type", value: "USB-C" },
      { name: "Fast Charging", value: "USB-C PD" },
    ],
    variants: [
      { id: "variant-1", name: "Black | 45W | USB-C PD", price: 649000, stock: 12 },
      { id: "variant-2", name: "White | 45W | USB-C PD", price: 649000, stock: 10 },
      { id: "variant-3", name: "Black | 25W | USB-C PD", price: 449000, stock: 8 },
    ],
  },

  {
    id: "product-21",
    storeId: "store-2",
    sellerId: "user-2",
    name: "Baseus USB-C Hub 8-in-1",
    category: "Mobile Accessories",
    image: "https://m.media-amazon.com/images/I/61TxGjlk4uS.jpg",
    description:
      "The Baseus USB-C Hub 8-in-1 expands a single USB-C port into a full suite of connectivity options, including HDMI, USB 3.0, and memory card readers. It's the perfect companion for laptops and tablets that come with limited ports.\n\nHDMI output lets you connect to an external display, while USB 3.0 ports handle peripherals and storage devices at high speed. Built-in SD and microSD card support makes transferring photos and videos simple.\n\nCompact, portable, and plug-and-play, this hub is ideal for anyone who needs extra ports for displays, storage, peripherals, and charging while on the move.",
    features: [
      "8-in-1 connectivity from a single USB-C port",
      "HDMI output for external displays",
      "USB 3.0 ports for high-speed peripherals",
      "SD and microSD card support",
      "Power Delivery pass-through charging",
      "Compact aluminum, plug-and-play design",
    ],
    specifications: [
      { name: "Ports", value: "HDMI, USB 3.0, SD/microSD, USB-C PD" },
      { name: "Host Interface", value: "USB-C" },
      { name: "Material", value: "Aluminum Alloy" },
    ],
    variants: [
      { id: "variant-1", name: "Gray | 8-in-1 | HDMI | USB 3.0 | PD | SD", price: 599000, stock: 10 },
      { id: "variant-2", name: "Space Gray | 8-in-1 | HDMI 4K | USB 3.0", price: 649000, stock: 9 },
      { id: "variant-3", name: "Silver | 8-in-1 | HDMI | Ethernet | SD", price: 699000, stock: 8 },
    ],
  },

  {
    id: "product-22",
    storeId: "store-2",
    sellerId: "user-2",
    name: "Spigen Ultra Hybrid Case",
    category: "Phone Case",
    image:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/101/MTA-133854670/spigen_spigen_ultra_hybrid_case_iphone_15_pro_-_casing_cover_clear_original_full01_jav3tun7.jpg",
    description:
      "The Spigen Ultra Hybrid Case protects your phone without hiding its design, thanks to a transparent hybrid construction that keeps the original look intact. Reinforced edges and shock absorption guard against drops and everyday bumps.\n\nRaised bezels around the camera and screen add an extra layer of protection, while anti-yellowing materials on select variants keep the case looking clear over time. MagSafe compatibility on selected variants adds convenient wireless charging and accessory support.\n\nA slim, reliable case for anyone who wants solid protection without adding bulk to their phone.",
    features: [
      "Transparent hybrid construction",
      "Shock absorption with reinforced edges",
      "Raised camera and screen protection",
      "MagSafe compatibility on selected variants",
      "Anti-yellowing materials",
    ],
    specifications: [
      { name: "Material", value: "TPU + Polycarbonate" },
      { name: "Protection", value: "Shock-absorbing, reinforced corners" },
      { name: "MagSafe", value: "Supported on select variants" },
    ],
    variants: [
      { id: "variant-1", name: "Clear | MagSafe | Shock Protection", price: 499000, stock: 15 },
      { id: "variant-2", name: "Clear Black | MagSafe | Shock Protection", price: 499000, stock: 12 },
      { id: "variant-3", name: "Clear | Anti-Yellowing | MagSafe", price: 549000, stock: 8 },
    ],
  },

  {
    id: "product-23",
    storeId: "store-2",
    sellerId: "user-2",
    name: "Apple Watch Series 10",
    category: "Smartwatch",
    image:
      "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/121202-apple-watch-series-10.png",
    description:
      "The Apple Watch Series 10 keeps you connected and on top of your health goals with a bright display and a comprehensive set of health-focused sensors. Available in 42mm and 46mm aluminum cases, it fits a wide range of wrist sizes and styles.\n\nBuilt-in GPS tracks workouts accurately, while optional cellular connectivity keeps you reachable even when your phone is left behind. Activity tracking and workout monitoring help you stay on pace with your fitness goals.\n\nSeamlessly integrated with the Apple ecosystem, the Series 10 is a capable everyday companion for fitness, communication, and daily productivity.",
    features: [
      "42mm or 46mm aluminum case options",
      "Built-in GPS with optional cellular connectivity",
      "Comprehensive activity and workout tracking",
      "Health-focused sensors",
      "Seamless Apple ecosystem integration",
    ],
    specifications: [
      { name: "Case Size", value: "42mm / 46mm" },
      { name: "Material", value: "Aluminum" },
      { name: "Connectivity", value: "GPS / GPS + Cellular" },
      { name: "Health Sensors", value: "Heart Rate, ECG, Blood Oxygen" },
    ],
    variants: [
      { id: "variant-1", name: "42mm | GPS | Aluminum | Sport Band", price: 7999000, stock: 3 },
      { id: "variant-2", name: "46mm | GPS | Aluminum | Sport Band", price: 8499000, stock: 2 },
      { id: "variant-3", name: "42mm | GPS + Cellular | Aluminum", price: 9999000, stock: 2 },
    ],
  },

  // ===================== STORE 3 — Audio Equipment =====================
  {
    id: "product-24",
    storeId: "store-3",
    sellerId: "user-3",
    name: "Sony WH-1000XM5",
    category: "Headphones",
    image:
      "https://www.sony.co.id/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
    description:
      "The Sony WH-1000XM5 sets the standard for wireless noise-cancelling headphones, combining industry-leading active noise cancellation with rich, detailed sound. Whether you're on a plane, in a busy office, or just want to focus, the ANC blocks out the world around you.\n\nUp to 30 hours of battery life keeps the music going through long flights and full work days, while built-in microphones make hands-free calls clear on both ends. Multipoint connectivity on select configurations lets you switch seamlessly between devices.\n\nLightweight and comfortable for extended wear, the WH-1000XM5 is a great fit for travel, office work, commuting, and study sessions.",
    features: [
      "Industry-leading active noise cancellation",
      "Up to 30 hours of battery life",
      "High-quality audio drivers",
      "Built-in microphones for hands-free calls",
      "Multipoint connectivity on select configurations",
      "Lightweight, ergonomic design",
    ],
    specifications: [
      { name: "Driver Type", value: "Dynamic" },
      { name: "Connectivity", value: "Bluetooth" },
      { name: "Noise Cancellation", value: "Active (ANC)" },
      { name: "Battery Life", value: "Up to 30 hours" },
      { name: "Microphone", value: "Built-in, multi-mic array" },
    ],
    variants: [
      { id: "variant-1", name: "Black | Wireless | ANC | 30 Hours", price: 5499000, stock: 5 },
      { id: "variant-2", name: "Silver | Wireless | ANC | 30 Hours", price: 5499000, stock: 4 },
      { id: "variant-3", name: "Black | Wireless | ANC | Multipoint", price: 5699000, stock: 3 },
    ],
  },

  {
    id: "product-25",
    storeId: "store-3",
    sellerId: "user-3",
    name: "Bose QuietComfort Ultra",
    category: "Headphones",
    image:
      "https://cdnpro.eraspace.com/media/catalog/product/b/o/bose_quietcomfort_ultra_earbuds_2nd_gen_black_04.webp",
    description:
      "The Bose QuietComfort Ultra combines advanced active noise cancellation with an immersive audio mode that adds a spatial, theater-like quality to music and movies. Premium sound reproduction makes every listening session feel rich and detailed.\n\nComfortable ear cushions and a premium over-ear design mean you can wear these for hours without fatigue, whether you're traveling, working, or simply relaxing. Built-in microphones keep calls clear, and touch controls make adjusting playback effortless.\n\nWith long battery life and Bluetooth wireless connectivity, the QuietComfort Ultra is built for travel, entertainment, and long listening sessions.",
    features: [
      "Advanced active noise cancellation",
      "Immersive spatial audio mode",
      "Premium sound reproduction",
      "Comfortable over-ear cushions for long wear",
      "Touch controls and built-in microphones",
    ],
    specifications: [
      { name: "Driver Type", value: "Dynamic" },
      { name: "Connectivity", value: "Bluetooth" },
      { name: "Noise Cancellation", value: "Active (ANC)" },
      { name: "Audio Mode", value: "Immersive / Spatial Audio" },
    ],
    variants: [
      { id: "variant-1", name: "Black | Wireless | ANC | Immersive Audio", price: 6299000, stock: 3 },
      { id: "variant-2", name: "White | Wireless | ANC | Immersive Audio", price: 6299000, stock: 3 },
      { id: "variant-3", name: "Black | Wireless | ANC | Spatial Audio", price: 6499000, stock: 2 },
    ],
  },

  {
    id: "product-26",
    storeId: "store-3",
    sellerId: "user-3",
    name: "Sennheiser Momentum 4",
    category: "Headphones",
    image:
      "https://id.sennheiser-hearing.com/cdn/shop/files/MOMENTUM_4_Wireless_Graphite.jpg?v=1774358028",
    description:
      "The Sennheiser Momentum 4 blends premium sound quality with exceptional battery life, running up to 60 hours on a single charge. Adaptive active noise cancellation adjusts automatically to your surroundings, keeping distractions out wherever you are.\n\nHigh-quality audio drivers deliver a rich, detailed sound signature, while comfortable ear cushions make long listening sessions easy on the ears. Touch controls put playback and call handling within easy reach.\n\nA great fit for music enthusiasts, frequent travelers, professionals, and students who want long battery life paired with premium sound.",
    features: [
      "Up to 60 hours of battery life",
      "Adaptive active noise cancellation",
      "High-quality audio drivers",
      "Comfortable ear cushions for extended wear",
      "Touch controls and built-in microphones",
    ],
    specifications: [
      { name: "Driver Type", value: "Dynamic" },
      { name: "Connectivity", value: "Bluetooth" },
      { name: "Noise Cancellation", value: "Adaptive ANC" },
      { name: "Battery Life", value: "Up to 60 hours" },
    ],
    variants: [
      { id: "variant-1", name: "Graphite | Wireless | ANC | 60 Hours", price: 4999000, stock: 4 },
      { id: "variant-2", name: "White | Wireless | ANC | 60 Hours", price: 4999000, stock: 3 },
      { id: "variant-3", name: "Black | Wireless | Adaptive ANC | 60 Hours", price: 5199000, stock: 3 },
    ],
  },

  {
    id: "product-27",
    storeId: "store-3",
    sellerId: "user-3",
    name: "AirPods Pro 2",
    category: "Earbuds",
    image:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111851_sp880-airpods-Pro-2nd-gen.png",
    description:
      "AirPods Pro 2 pair Active Noise Cancellation with Transparency Mode, letting you switch between blocking out the world and staying aware of your surroundings with a tap. The USB-C charging case brings them in line with the rest of your Apple devices.\n\nSpatial audio adds an immersive, theater-like dimension to movies and music, while in-ear detection and automatic device switching make everyday use feel effortless within the Apple ecosystem.\n\nCompact and comfortable, AirPods Pro 2 are a great everyday choice for music, calls, workouts, and travel.",
    features: [
      "Active Noise Cancellation and Transparency Mode",
      "USB-C charging case",
      "Spatial audio support",
      "In-ear detection and automatic device switching",
      "Touch controls",
    ],
    specifications: [
      { name: "Connectivity", value: "Bluetooth" },
      { name: "Noise Cancellation", value: "Active (ANC) + Transparency" },
      { name: "Charging Case", value: "USB-C" },
      { name: "Audio", value: "Spatial Audio" },
    ],
    variants: [
      { id: "variant-1", name: "White | USB-C | ANC | MagSafe", price: 3999000, stock: 8 },
      { id: "variant-2", name: "White | USB-C | ANC | Wireless Charging", price: 3999000, stock: 6 },
      { id: "variant-3", name: "White | USB-C | ANC | Personalized Audio", price: 4199000, stock: 4 },
    ],
  },

  {
    id: "product-28",
    storeId: "store-3",
    sellerId: "user-3",
    name: "Sony WF-1000XM5",
    category: "Earbuds",
    image:
      "https://sony.scene7.com/is/image/sonyglobalsolutions/Primary_image_black?$S7Product$&fmt=png-alpha",
    description:
      "The Sony WF-1000XM5 packs high-resolution audio support and strong active noise cancellation into a compact, ergonomic earbud design. Advanced audio processing brings out fine details in music, while ANC keeps outside noise at bay.\n\nBuilt-in microphones deliver clear calls, and multipoint connectivity on supported variants lets you jump between devices without missing a beat. A long battery life keeps you covered through the workday and beyond.\n\nWell suited for commuting, travel, office work, and immersive personal listening.",
    features: [
      "Active noise cancellation",
      "High-resolution audio support",
      "Compact, ergonomic design",
      "Built-in microphones for clear calls",
      "Multipoint connectivity on supported variants",
    ],
    specifications: [
      { name: "Connectivity", value: "Bluetooth" },
      { name: "Noise Cancellation", value: "Active (ANC)" },
      { name: "Audio", value: "Hi-Res Audio support" },
      { name: "Battery Life", value: "Extended with charging case" },
    ],
    variants: [
      { id: "variant-1", name: "Black | Wireless | ANC | Hi-Res", price: 3999000, stock: 6 },
      { id: "variant-2", name: "Silver | Wireless | ANC | Hi-Res", price: 3999000, stock: 5 },
      { id: "variant-3", name: "Black | Wireless | ANC | Multipoint", price: 4199000, stock: 4 },
    ],
  },

  {
    id: "product-29",
    storeId: "store-3",
    sellerId: "user-3",
    name: "Shure MV7+",
    category: "Microphone",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Vhkvvb73omE_w2x9DlzvQQY4t2AGmVSkJzd90xChQPHLEJyZicUOUb8&s=10",
    description:
      "The Shure MV7+ is a dynamic microphone built for podcasters, streamers, and voice-over artists who need professional-grade sound. Flexible USB-C and XLR connectivity means it works equally well as a plug-and-play USB mic or as part of a full XLR audio interface setup.\n\nA voice-focused sound profile captures clear, present vocals while minimizing background noise, and integrated controls let you adjust gain and monitoring right on the microphone.\n\nCompatible with desktop stands and boom arms, the MV7+ fits seamlessly into podcast studios, streaming setups, and home recording spaces.",
    features: [
      "Dynamic microphone with voice-focused sound profile",
      "Flexible USB-C and XLR connectivity",
      "Integrated gain and monitoring controls",
      "Professional recording capability",
      "Desktop stand and boom arm compatible",
    ],
    specifications: [
      { name: "Microphone Type", value: "Dynamic" },
      { name: "Connectivity", value: "USB-C / XLR" },
      { name: "Polar Pattern", value: "Cardioid" },
      { name: "Controls", value: "Onboard gain & monitoring" },
    ],
    variants: [
      { id: "variant-1", name: "Black | USB-C/XLR | Dynamic", price: 5299000, stock: 2 },
      { id: "variant-2", name: "Black | USB-C/XLR | Voice Isolation", price: 5299000, stock: 2 },
      { id: "variant-3", name: "Black | USB-C/XLR | Podcast Setup", price: 5599000, stock: 1 },
    ],
  },

  {
    id: "product-30",
    storeId: "store-3",
    sellerId: "user-3",
    name: "Rode NT-USB+",
    category: "Microphone",
    image:
      "https://cdn.shopify.com/s/files/1/0672/3806/8470/files/b7ce140d-2678-44ba-b7a3-d5a39f48ca52.jpg?v=1709975364",
    description:
      "The Rode NT-USB+ is a USB-C condenser microphone designed for studio-quality vocal recording straight out of the box. Simple plug-and-play setup means you can start recording podcasts, streams, or music in minutes.\n\nA built-in headphone output enables direct monitoring, so you can hear exactly what's being recorded without latency. The compact desktop-friendly design fits neatly on any streaming or recording setup.\n\nGreat for podcasting, streaming, voice recording, gaming, and music production where studio-grade sound matters.",
    features: [
      "USB-C condenser microphone",
      "Studio-quality vocal recording",
      "Built-in headphone output for direct monitoring",
      "Simple plug-and-play setup",
      "Compact desktop-friendly design",
    ],
    specifications: [
      { name: "Microphone Type", value: "Condenser" },
      { name: "Connectivity", value: "USB-C" },
      { name: "Monitoring", value: "Built-in headphone output" },
    ],
    variants: [
      { id: "variant-1", name: "Black | USB-C | Condenser", price: 2999000, stock: 4 },
      { id: "variant-2", name: "Black | USB-C | Studio Quality", price: 2999000, stock: 3 },
      { id: "variant-3", name: "Black | USB-C | Monitoring Output", price: 3099000, stock: 2 },
    ],
  },

  {
    id: "product-31",
    storeId: "store-3",
    sellerId: "user-3",
    name: "JBL Charge 5",
    category: "Speaker",
    image:
      "https://id.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwf9fae84b/JBL_CHARGE5_HERO_GREEN_0025_x2.png",
    description:
      "The JBL Charge 5 is a portable Bluetooth speaker built for outdoor adventures, delivering powerful, punchy sound wherever you take it. IP67 water and dust resistance means splashes, rain, and dusty trails won't slow the party down.\n\nUp to approximately 20 hours of battery life keeps the music playing all day, and the built-in rechargeable battery can even double as a power bank for your other devices in a pinch.\n\nDurable and portable, the Charge 5 is a great companion for travel, outdoor activities, parties, and casual home listening.",
    features: [
      "Portable Bluetooth connectivity",
      "IP67 water and dust resistance",
      "Up to approximately 20 hours of battery life",
      "Powerful, room-filling wireless audio",
      "Durable, outdoor-friendly construction",
    ],
    specifications: [
      { name: "Connectivity", value: "Bluetooth" },
      { name: "Water Resistance", value: "IP67" },
      { name: "Battery Life", value: "Up to 20 hours" },
    ],
    variants: [
      { id: "variant-1", name: "Green | Bluetooth | IP67 | 20 Hours", price: 2199000, stock: 6 },
      { id: "variant-2", name: "Black | Bluetooth | IP67 | 20 Hours", price: 2199000, stock: 6 },
      { id: "variant-3", name: "Blue | Bluetooth | IP67 | 20 Hours", price: 2199000, stock: 4 },
    ],
  },

  {
    id: "product-32",
    storeId: "store-3",
    sellerId: "user-3",
    name: "Marshall Emberton III",
    category: "Speaker",
    image:
      "https://cdnpro.eraspace.com/media/catalog/product/m/a/marshall_emberton_iii_black_brass_3.jpg",
    description:
      "The Marshall Emberton III packs iconic Marshall styling into a compact, portable Bluetooth speaker. Over 32 hours of battery life means it can easily last through a weekend trip without needing a recharge.\n\nIP67 dust and water resistance makes it ready for the beach, the pool, or an unexpected rain shower, while immersive stereo-style sound punches well above its small size.\n\nEasy to carry and built to last, the Emberton III is a stylish pick for home listening, travel, and outdoor gatherings.",
    features: [
      "Over 32 hours of battery life",
      "IP67 dust and water resistance",
      "Immersive stereo-style sound",
      "Compact, portable design",
      "Iconic Marshall styling",
    ],
    specifications: [
      { name: "Connectivity", value: "Bluetooth" },
      { name: "Water Resistance", value: "IP67" },
      { name: "Battery Life", value: "32+ hours" },
    ],
    variants: [
      { id: "variant-1", name: "Black & Brass | Bluetooth | 32+ Hours | IP67", price: 3299000, stock: 3 },
      { id: "variant-2", name: "Cream | Bluetooth | 32+ Hours | IP67", price: 3299000, stock: 2 },
      { id: "variant-3", name: "Black | Bluetooth | 32+ Hours | IP67", price: 3299000, stock: 2 },
    ],
  },

  {
    id: "product-33",
    storeId: "store-3",
    sellerId: "user-3",
    name: "Audio-Technica ATH-M50x",
    category: "Headphones",
    image:
      "https://www.sweelee.co.id/cdn/shop/products/products_2FA34-ATH-M50X_2FA34-ATH-M50X_1580693683661.jpg?v=1655719826&width=2048",
    description:
      "The Audio-Technica ATH-M50x is a studio staple, trusted by audio professionals for its detailed, accurate sound reproduction. The closed-back over-ear design isolates outside noise, making it ideal for critical listening and monitoring.\n\nRotating earcups and a foldable design make the M50x easy to pack for sessions on the go, while a detachable cable system adds flexibility and durability over years of use.\n\nA reliable choice for recording studios, music production, mixing, video editing, and anyone who wants accurate, wired audio for critical listening.",
    features: [
      "Closed-back over-ear design for noise isolation",
      "Detailed, accurate sound reproduction",
      "Rotating earcups and foldable construction",
      "Detachable cable design",
      "Comfortable padded headband",
    ],
    specifications: [
      { name: "Driver Type", value: "Dynamic" },
      { name: "Connectivity", value: "Wired" },
      { name: "Design", value: "Closed-back, Over-ear" },
      { name: "Cable", value: "Detachable" },
    ],
    variants: [
      { id: "variant-1", name: "Black | Wired | Closed-Back | Studio", price: 2199000, stock: 5 },
      { id: "variant-2", name: "White | Wired | Closed-Back | Studio", price: 2199000, stock: 3 },
      { id: "variant-3", name: "Black | Wired | Professional Monitor", price: 2299000, stock: 3 },
    ],
  },

  {
    id: "product-34",
    storeId: "store-3",
    sellerId: "user-3",
    name: "FIFINE K688",
    category: "Microphone",
    image:
      "https://fifinemicrophone.com/cdn/shop/files/FIFINE-K688-dynamic-microphone-black.png?v=1765334442",
    description:
      "The FIFINE K688 is a beginner-friendly dynamic microphone that offers both USB and XLR connectivity, making it an easy first step into content creation. Built-in gain control and headphone monitoring make dialing in the right sound simple.\n\nA mute control adds convenience during calls and streams, while the solid desktop-friendly build keeps the mic stable during use.\n\nA versatile, affordable option for streaming, podcasting, gaming, voice recording, and online meetings.",
    features: [
      "Dynamic microphone capsule",
      "Dual USB and XLR connectivity",
      "Built-in gain control and headphone monitoring",
      "Convenient mute control",
      "Solid desktop-friendly build",
    ],
    specifications: [
      { name: "Microphone Type", value: "Dynamic" },
      { name: "Connectivity", value: "USB / XLR" },
      { name: "Controls", value: "Gain, Mute, Monitoring" },
    ],
    variants: [
      { id: "variant-1", name: "Black | USB/XLR | Dynamic", price: 1099000, stock: 8 },
      { id: "variant-2", name: "Black | USB/XLR | RGB", price: 1149000, stock: 7 },
      { id: "variant-3", name: "Black | USB/XLR | Podcast Setup", price: 1199000, stock: 5 },
    ],
  },

  // ===================== STORE 4 — Gaming Gear =====================
  {
    id: "product-35",
    storeId: "store-4",
    sellerId: "user-4",
    name: "Logitech G Pro X Superlight 2",
    category: "Gaming Mouse",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa55K3DaqyDbZIE_DoIoY7PPKnZVtQIc58OKirc1AMNg&s",
    description:
      "The Logitech G Pro X Superlight 2 is built for competitive gaming, weighing in at just around 60 grams for lightning-fast movements. The HERO 2 sensor delivers exceptional tracking accuracy at any speed.\n\nWireless connectivity keeps latency low without the drag of a cable, while the ergonomic shape and responsive switches make every click feel precise. A rechargeable battery and onboard controls round out a mouse designed for esports-level performance.\n\nBuilt for competitive FPS, esports, and fast-paced PC gaming where every millisecond counts.",
    features: [
      "Ultra-lightweight design at approximately 60g",
      "HERO 2 high-precision sensor",
      "Wireless low-latency connectivity",
      "Ergonomic shape with responsive switches",
      "Rechargeable battery with onboard controls",
    ],
    specifications: [
      { name: "Sensor", value: "HERO 2" },
      { name: "Weight", value: "~60g" },
      { name: "Connectivity", value: "Wireless" },
      { name: "Battery", value: "Rechargeable" },
    ],
    variants: [
      { id: "variant-1", name: "Black | Wireless | 60g | HERO 2", price: 2299000, stock: 6 },
      { id: "variant-2", name: "White | Wireless | 60g | HERO 2", price: 2299000, stock: 5 },
      { id: "variant-3", name: "Magenta | Wireless | 60g | HERO 2", price: 2299000, stock: 3 },
    ],
  },

  {
    id: "product-36",
    storeId: "store-4",
    sellerId: "user-4",
    name: "Razer DeathAdder V3 Pro",
    category: "Gaming Mouse",
    image:
      "https://s.pacn.ws/1/p/17r/razer-deathadder-v3-pro-white-787585.1.jpg?v=s738qx",
    description:
      "The Razer DeathAdder V3 Pro refines a legendary shape into a lightweight, wireless competitive gaming mouse. At roughly 63 grams, it stays fast and agile through the longest gaming sessions.\n\nThe Focus Pro optical sensor delivers exceptional tracking precision, while the ergonomic right-handed shape and responsive switches keep every click feeling natural. A rechargeable battery keeps you gaming longer between charges.\n\nIdeal for FPS, battle royale, and MOBA titles that demand precise, fast mouse movements.",
    features: [
      "Lightweight construction at approximately 63g",
      "Focus Pro high-precision optical sensor",
      "Wireless connectivity with low latency",
      "Ergonomic right-handed shape",
      "Rechargeable battery",
    ],
    specifications: [
      { name: "Sensor", value: "Focus Pro 30K" },
      { name: "Weight", value: "~63g" },
      { name: "Connectivity", value: "Wireless" },
      { name: "Shape", value: "Ergonomic, Right-handed" },
    ],
    variants: [
      { id: "variant-1", name: "White | Wireless | 63g | Focus Pro 30K", price: 2099000, stock: 5 },
      { id: "variant-2", name: "Black | Wireless | 63g | Focus Pro 30K", price: 2099000, stock: 4 },
      { id: "variant-3", name: "White | Wireless | 63g | 30K Sensor", price: 2099000, stock: 2 },
    ],
  },

  {
    id: "product-37",
    storeId: "store-4",
    sellerId: "user-4",
    name: "Keychron Q1 Pro",
    category: "Mechanical Keyboard",
    image:
      "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2025/4/7/8732ee70-bd3f-48ce-ba66-689bcab421bb.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg",
    description:
      "The Keychron Q1 Pro brings a premium, customizable typing experience to a compact 75% layout. Wireless connectivity keeps your desk tidy, while QMK/VIA support opens the door to deep keymap and lighting customization.\n\nHot-swappable switches let you experiment with different switch types without any soldering, so you can fine-tune the feel and sound to your liking. A premium construction gives the board a satisfying heft and typing feel.\n\nA great fit for gaming, programming, writing, and enthusiast keyboard builds that want both performance and customization.",
    features: [
      "Compact 75% layout",
      "Wireless connectivity",
      "QMK/VIA customization support",
      "Hot-swappable switches",
      "Premium build quality",
    ],
    specifications: [
      { name: "Layout", value: "75%" },
      { name: "Switch Type", value: "Hot-swappable Mechanical" },
      { name: "Connectivity", value: "Wireless / Wired" },
      { name: "Software", value: "QMK/VIA" },
    ],
    variants: [
      { id: "variant-1", name: "Black | 75% | Wireless | QMK/VIA | Hot-Swap", price: 2899000, stock: 3 },
      { id: "variant-2", name: "Gray | 75% | Wireless | QMK/VIA | Hot-Swap", price: 2899000, stock: 3 },
      { id: "variant-3", name: "White | 75% | Wireless | QMK/VIA | Hot-Swap", price: 2899000, stock: 2 },
    ],
  },

  {
    id: "product-38",
    storeId: "store-4",
    sellerId: "user-4",
    name: "Razer BlackWidow V4",
    category: "Mechanical Keyboard",
    image:
      "https://image.idntimes.com/post/20230218/kv1-razer-x-blackwidow-beautyshot-1-85341f1c721a0d553d7303c9fd000abe.png",
    description:
      "The Razer BlackWidow V4 is a full-size mechanical keyboard built for gaming and everyday productivity alike. Customizable RGB lighting adds personality to any setup, while mechanical switches deliver satisfying, responsive keystrokes.\n\nDedicated media controls make adjusting volume and playback effortless without alt-tabbing out of a game, and programmable keys let you set up macros for your favorite titles or workflows. A comfortable wrist rest supports long gaming or typing sessions.\n\nDesigned for gaming, office productivity, programming, content creation, and anyone who wants a complete full-size mechanical keyboard.",
    features: [
      "Full-size mechanical layout",
      "Customizable RGB lighting",
      "Dedicated media controls",
      "Programmable keys",
      "Comfortable wrist support",
    ],
    specifications: [
      { name: "Layout", value: "Full Size" },
      { name: "Switch Type", value: "Mechanical (Green / Yellow)" },
      { name: "Lighting", value: "Per-key RGB" },
      { name: "Connectivity", value: "Wired" },
    ],
    variants: [
      { id: "variant-1", name: "Black | Full Size | Green Switch | RGB", price: 2799000, stock: 5 },
      { id: "variant-2", name: "Black | Full Size | Yellow Switch | RGB", price: 2799000, stock: 5 },
      { id: "variant-3", name: "Black | Full Size | Mechanical | RGB", price: 2799000, stock: 3 },
    ],
  },

  {
    id: "product-39",
    storeId: "store-4",
    sellerId: "user-4",
    name: "SteelSeries Apex Pro TKL",
    category: "Mechanical Keyboard",
    image:
      "https://media.dinomarket.com/docs/imgTD/2024-10/DM_9A358B3FD1A16949DED59368836751B1_171024181053_xl.jpg",
    description:
      "The SteelSeries Apex Pro TKL lets you fine-tune each key's actuation point, adapting the keyboard to your exact playstyle. Rapid trigger technology on select variants delivers near-instant key resets for competitive gaming.\n\nThe tenkeyless layout saves desk space and brings your mouse closer for a more comfortable, ergonomic setup. Customizable RGB lighting and programmable controls add both style and function.\n\nBuilt for competitive gaming, especially fast-paced FPS titles, while still offering an excellent typing experience for everyday productivity.",
    features: [
      "Adjustable actuation technology",
      "Rapid trigger support on select variants",
      "Tenkeyless (TKL) compact layout",
      "Customizable RGB lighting",
      "Programmable controls",
    ],
    specifications: [
      { name: "Layout", value: "TKL (Tenkeyless)" },
      { name: "Switch Type", value: "Adjustable Actuation Mechanical" },
      { name: "Lighting", value: "Per-key RGB" },
      { name: "Connectivity", value: "Wired" },
    ],
    variants: [
      { id: "variant-1", name: "Black | TKL | Adjustable Actuation | RGB", price: 3299000, stock: 2 },
      { id: "variant-2", name: "Black | TKL | Rapid Trigger | RGB", price: 3299000, stock: 2 },
      { id: "variant-3", name: "White | TKL | Adjustable Actuation | RGB", price: 3299000, stock: 2 },
    ],
  },

  {
    id: "product-40",
    storeId: "store-4",
    sellerId: "user-4",
    name: "PlayStation 5 DualSense",
    category: "Game Controller",
    image:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//99/MTA-9868113/sony_ps5_dualsense_controller_wireless_full01_8i5xr31.jpg",
    description:
      "The PlayStation 5 DualSense controller brings a new level of immersion to gaming with advanced haptic feedback and adaptive triggers that respond dynamically to in-game action. Every impact and texture feels more real in your hands.\n\nA built-in microphone lets you jump into voice chat without a headset, while motion sensing adds another layer of interactivity to supported games. The ergonomic layout stays comfortable through long play sessions.\n\nDesigned for PS5 gaming and any compatible environment that supports DualSense's advanced feedback features.",
    features: [
      "Advanced haptic feedback",
      "Adaptive triggers that respond to gameplay",
      "Built-in microphone",
      "Motion sensing support",
      "Rechargeable battery",
    ],
    specifications: [
      { name: "Connectivity", value: "Wireless (Bluetooth / USB)" },
      { name: "Feedback", value: "Haptic Feedback, Adaptive Triggers" },
      { name: "Compatibility", value: "PS5, PC (supported titles)" },
      { name: "Battery", value: "Rechargeable" },
    ],
    variants: [
      { id: "variant-1", name: "White | Wireless | Haptic Feedback", price: 1199000, stock: 8 },
      { id: "variant-2", name: "Black | Wireless | Haptic Feedback", price: 1199000, stock: 7 },
      { id: "variant-3", name: "Red | Wireless | Haptic Feedback", price: 1199000, stock: 4 },
    ],
  },

  {
    id: "product-41",
    storeId: "store-4",
    sellerId: "user-4",
    name: "Xbox Wireless Controller",
    category: "Game Controller",
    image:
      "https://assets.xboxservices.com/assets/55/83/55836945-e141-4d47-9dad-21d902948816.jpg?n=111101_Gallery-0_1_1350x759.jpg",
    description:
      "The Xbox Wireless Controller pairs a familiar, comfortable layout with reliable wireless performance across Xbox consoles, Windows PCs, and cloud gaming. Bluetooth support makes pairing with phones and tablets simple too.\n\nTextured grips keep the controller steady during intense sessions, while responsive analog sticks and a precise directional pad make every input count. Vibration feedback adds a subtle layer of immersion to the action.\n\nA dependable, versatile controller for Xbox gaming, PC gaming, racing games, sports titles, and cloud gaming.",
    features: [
      "Wireless connectivity with Bluetooth support",
      "Xbox and Windows PC compatibility",
      "Textured grips for a secure hold",
      "Responsive analog sticks and directional pad",
      "Vibration feedback",
    ],
    specifications: [
      { name: "Connectivity", value: "Wireless / Bluetooth" },
      { name: "Compatibility", value: "Xbox, PC, Cloud Gaming" },
      { name: "Feedback", value: "Vibration" },
      { name: "Power", value: "AA Batteries" },
    ],
    variants: [
      { id: "variant-1", name: "Black | Wireless | Bluetooth | Xbox/PC", price: 899000, stock: 9 },
      { id: "variant-2", name: "White | Wireless | Bluetooth | Xbox/PC", price: 899000, stock: 7 },
      { id: "variant-3", name: "Red | Wireless | Bluetooth | Xbox/PC", price: 899000, stock: 5 },
    ],
  },

  {
    id: "product-42",
    storeId: "store-4",
    sellerId: "user-4",
    name: "LG UltraGear 27GR83Q",
    category: "Gaming Monitor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPIHDh-U0UY-WusmY2PGgTufTTvs7Ba8bNBzVi4oydTQwj7jxyplSBBeK&s=10",
    description:
      "The LG UltraGear 27GR83Q is a 27-inch QHD gaming monitor built for speed, with refresh rates reaching up to 240Hz depending on configuration. Combined with an approximately 1ms response time, fast-paced action stays sharp and blur-free.\n\nAdaptive synchronization support helps eliminate screen tearing during intense gameplay, while HDR capability on supported configurations adds extra depth and contrast to compatible content.\n\nAn ergonomic stand and high pixel density round out a monitor built for competitive gaming, esports, and high-frame-rate content.",
    features: [
      "27-inch QHD gaming display",
      "Refresh rate up to 240Hz",
      "Approximately 1ms response time",
      "Adaptive synchronization support",
      "HDR capability on supported configurations",
    ],
    specifications: [
      { name: "Screen Size", value: "27 inches" },
      { name: "Resolution", value: "QHD (2560x1440)" },
      { name: "Refresh Rate", value: "180Hz – 240Hz" },
      { name: "Response Time", value: "1ms" },
    ],
    variants: [
      { id: "variant-1", name: "27-inch | QHD | 240Hz | 1ms | Black", price: 7499000, stock: 2 },
      { id: "variant-2", name: "27-inch | QHD | 240Hz | HDR | Black", price: 7999000, stock: 2 },
      { id: "variant-3", name: "27-inch | QHD | 180Hz | 1ms | Black", price: 6999000, stock: 1 },
    ],
  },

  {
    id: "product-43",
    storeId: "store-4",
    sellerId: "user-4",
    name: "Elgato Stream Deck MK.2",
    category: "Streaming",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOOImjxZhgMiNpkc5H2A6J6ZfXLkm6joajS-smIetCQ&s",
    description:
      "The Elgato Stream Deck MK.2 puts 15 customizable LCD keys at your fingertips, each ready to trigger shortcuts, macros, or app integrations with a single press. It's a favorite tool among streamers and content creators for good reason.\n\nCustomizable icons make it easy to see exactly what each key does at a glance, while multi-action commands let a single press trigger a whole sequence of steps. USB connectivity keeps setup simple.\n\nA productivity powerhouse for streamers, podcasters, video editors, and anyone who wants quick access to their most-used commands.",
    features: [
      "15 customizable LCD keys",
      "Programmable shortcuts and macros",
      "Application integration",
      "Customizable icons for each key",
      "Multi-action command support",
    ],
    specifications: [
      { name: "Keys", value: "15 LCD Keys" },
      { name: "Connectivity", value: "USB" },
      { name: "Software", value: "Elgato Stream Deck software" },
    ],
    variants: [
      { id: "variant-1", name: "Black | 15 Keys | USB-C", price: 2499000, stock: 5 },
      { id: "variant-2", name: "White | 15 Keys | USB-C", price: 2499000, stock: 3 },
      { id: "variant-3", name: "Black | 15 Keys | Macro Control", price: 2599000, stock: 2 },
    ],
  },

  {
    id: "product-44",
    storeId: "store-4",
    sellerId: "user-4",
    name: "Razer BlackShark V2 Pro",
    category: "Gaming Headset",
    image:
      "https://s.pacn.ws/1/p/1b6/razer-blackshark-v2-pro-wireless-headset-for-playstation-5-pc-b-849055.1.jpg?v=sqsf8c",
    description:
      "The Razer BlackShark V2 Pro is a wireless gaming headset built for competitive play, with up to 70 hours of battery life to keep you in the game longer. High-quality gaming audio helps you pinpoint footsteps and cues with precision.\n\nA wideband microphone with voice-focused tuning keeps your team calls clear, while lightweight construction and comfortable ear cushions make long sessions easier on your head and ears. Low-latency wireless connectivity keeps audio perfectly in sync with the action.\n\nA strong pick for FPS gaming, multiplayer titles, Discord calls, streaming, and marathon gaming sessions.",
    features: [
      "Up to 70 hours of battery life",
      "High-quality, precise gaming audio",
      "Wideband microphone with voice-focused tuning",
      "Lightweight, comfortable construction",
      "Low-latency wireless connection",
    ],
    specifications: [
      { name: "Connectivity", value: "Wireless (2.4GHz)" },
      { name: "Battery Life", value: "Up to 70 hours" },
      { name: "Microphone", value: "Detachable, Wideband" },
      { name: "Compatibility", value: "PC, PS5, Multi-platform" },
    ],
    variants: [
      { id: "variant-1", name: "Black | Wireless | 70 Hours | Wideband Mic", price: 2499000, stock: 5 },
      { id: "variant-2", name: "White | Wireless | 70 Hours | Wideband Mic", price: 2499000, stock: 4 },
      { id: "variant-3", name: "Black | Wireless | 70 Hours | Console/PC", price: 2499000, stock: 3 },
    ],
  },

  {
    id: "product-45",
    storeId: "store-4",
    sellerId: "user-4",
    name: "Logitech G840 XL Gaming Mouse Pad",
    category: "Gaming Accessories",
    image:
      "https://www.logitechg.com/content/dam/gaming/en/products/g840/g840-magenta/g840-magenta-gallery-1.png",
    description:
      "The Logitech G840 XL Gaming Mouse Pad gives you an expansive 900x400mm surface, plenty of room for both your keyboard and mouse in one continuous play space. Smooth cloth material ensures consistent, precise mouse tracking across the entire surface.\n\nAn anti-slip rubber base keeps the pad firmly in place during intense gaming, while stitched edges resist fraying over time. The low-profile design keeps your setup looking clean and professional.\n\nA great fit for FPS players, low-sensitivity mouse users, full-size keyboard setups, and anyone who wants a spacious, precise surface for their gaming desk.",
    features: [
      "Extra-large 900x400mm surface",
      "Smooth cloth material for consistent tracking",
      "Anti-slip rubber base",
      "Stitched edges for durability",
      "Keyboard and mouse coverage in one mat",
    ],
    specifications: [
      { name: "Size", value: "900 x 400mm" },
      { name: "Material", value: "Cloth surface, Rubber base" },
      { name: "Design", value: "Low-profile, Stitched edges" },
    ],
    variants: [
      { id: "variant-1", name: "Black | XL | 900x400mm | Cloth", price: 699000, stock: 10 },
      { id: "variant-2", name: "Magenta | XL | 900x400mm | Cloth", price: 699000, stock: 8 },
      { id: "variant-3", name: "Black | XL | Extended Desk Mat", price: 749000, stock: 6 },
    ],
  },

  {
    id: "product-46",
    storeId: "store-4",
    sellerId: "user-4",
    name: "Logitech Gamepad F310",
    category: "Game Controller",
    image:
      "https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/f310/f310-gallery-1.png",
    description:
      "The Logitech Gamepad F310 is a simple, reliable wired controller for PC gaming, with a familiar console-style button layout that feels immediately comfortable. Dual analog sticks and a directional pad handle everything from racing games to platformers.\n\nSupport for both XInput and DirectInput means it works with a wide range of PC games and emulators without extra setup. Vibration feedback adds a bit of extra immersion during gameplay.\n\nA budget-friendly, no-fuss option for anyone who wants a dependable wired controller for their PC gaming setup.",
    features: [
      "Wired USB connectivity",
      "Dual analog sticks and directional pad",
      "XInput and DirectInput support",
      "Vibration feedback",
      "Broad PC game and emulator compatibility",
    ],
    specifications: [
      { name: "Connectivity", value: "Wired USB" },
      { name: "Compatibility", value: "XInput / DirectInput" },
      { name: "Feedback", value: "Vibration" },
    ],
    variants: [
      { id: "variant-1", name: "Black | Wired | Dual Analog", price: 192000, stock: 10 },
      { id: "variant-2", name: "Black | USB | XInput/DirectInput", price: 192000, stock: 8 },
      { id: "variant-3", name: "Black | Wired | PC Compatible", price: 192000, stock: 6 },
    ],
  },
];