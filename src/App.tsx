import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Wifi, 
  CreditCard, 
  Zap, 
  LayoutGrid, 
  Smartphone, 
  Settings, 
  Coins,
  CheckCircle2,
  Users,
  TrendingUp,
  MessageSquare,
  ClipboardList,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

// --- Types ---
interface Achievement {
  id: number;
  title: string;
  category: string;
  description: string;
  result: string;
  image: string;
}

// --- Components ---

const Navbar = ({ onLinkClick }: { onLinkClick: (href: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'カイギョーズとは', href: '#about-kaigyo' },
    { name: 'サービス', href: '#service' },
    { name: '3つの約束', href: '#promises' },
    { name: '会社概要', href: '#about' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      onLinkClick(href);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={() => onLinkClick('/')} className="flex items-center">
            <img src="logo.png" alt="カイギョーズ" className="h-10 md:h-12 w-auto" referrerPolicy="no-referrer" />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => onLinkClick('#contact')}
            className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all"
          >
            お問い合わせ
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-200 py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-gray-900"
                onClick={(e) => {
                  handleLinkClick(e, link.href);
                  setIsMobileMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                onLinkClick('#contact');
                setIsMobileMenuOpen(false);
              }}
              className="bg-gray-900 text-white w-full py-3 rounded-xl font-medium mt-2"
            >
              お問い合わせ
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onConsultClick }: { onConsultClick: () => void }) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold tracking-widest uppercase bg-gray-100 text-gray-500 rounded-full"
          >
            Store Concierge Service
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.3] md:leading-[1.2]"
          >
            <span className="block">私たちのサービスは</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 block mt-1 md:mt-2">
              利益に直結します。
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-base md:text-2xl text-gray-500 max-w-4xl mx-auto mb-10 leading-relaxed px-2 md:px-4"
          >
            <span className="block">飲食店に必要なインフラ及び設備を比較検討し</span>
            <span className="block">お客様にあったサービスを無料で紹介させていただく会社です。</span>
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={onConsultClick}
              className="w-full sm:w-auto bg-gray-900 text-white px-8 py-4 rounded-full text-base md:text-lg font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl active:scale-95"
            >
              無料で相談する
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutKaigyoSection = () => {
  return (
    <section id="about-kaigyo" className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase mb-4 block">Our Concept</span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-12 leading-tight">
              カイギョーズとは
            </h2>

            <div className="bg-gray-50 rounded-[40px] p-8 md:p-16 border border-gray-100 shadow-sm">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 leading-snug">
                専門分野の「コンシェルジュ」を、<br className="hidden md:block" />
                あなたの店舗に貸し出すサービスです。
              </h3>
              <div className="max-w-2xl mx-auto">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
                  特定のメーカーに偏らない「第3者目線」で、あなたの店舗に最適なサービスを完全無料で提案・紹介。煩雑な手続きや比較検討をコンシェルジュが代行し、オーナー様が本業に集中できる環境を整えます。
                </p>
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                  <div className="flex items-center gap-2 text-gray-900 font-bold">
                    <CheckCircle2 size={20} className="text-blue-600" />
                    <span className="text-sm md:text-base">中立的な提案</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-900 font-bold">
                    <CheckCircle2 size={20} className="text-green-600" />
                    <span className="text-sm md:text-base">コスト削減の最大化</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-900 font-bold">
                    <CheckCircle2 size={20} className="text-purple-600" />
                    <span className="text-sm md:text-base">完全無料サポート</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PartnersSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[10px] md:text-xs font-bold text-green-600 tracking-widest uppercase mb-4 block">Partners</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">主な取引先</h2>
          <p className="text-sm md:text-lg text-gray-500">多くのパートナー企業様と共に、店舗運営を支えています。</p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {/* Business Design Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-full max-w-[280px] md:max-w-[320px] aspect-[2/1] flex items-center justify-center bg-gray-900 rounded-3xl shadow-sm border border-gray-800 p-8 group-hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-2xl tracking-widest">BUSINESS DESIGN</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const problems = [
    "開業時・運営中に営業電話や訪問が多すぎる",
    "何が適正価格か分からないまま契約している",
    "開業時に決めたサービスを「見直すきっかけ」がない",
    "回線・決済・電気などをバラバラに検討するのが面倒",
    "誰に相談すればいいか分からない"
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              実は、飲食店オーナーは<br className="md:hidden" />
              <span className="text-red-500">”専門外の悩み”</span>に<br className="md:hidden" />多くの時間を奪われています
            </h2>
            <p className="text-gray-500 text-sm md:text-base italic max-w-2xl mx-auto">
              「本業の料理や接客に集中したいのに、事務的な手続きや営業対応で一日が終わってしまう...」
            </p>
          </motion.div>
          
          <div className="space-y-3 md:space-y-4">
            {problems.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10, backgroundColor: '#fff' }}
                className="flex items-center gap-3 md:gap-4 bg-gray-50 p-4 rounded-xl md:rounded-2xl border border-gray-100 transition-all"
              >
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <X size={12} className="text-red-500" />
                </div>
                <span className="text-sm md:text-base text-gray-700 font-medium">{p}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  const areas = [
    { icon: <Wifi size={24} />, name: "ネット回線" },
    { icon: <CreditCard size={24} />, name: "キャッシュレス決済" },
    { icon: <Zap size={24} />, name: "電力" },
    { icon: <LayoutGrid size={24} />, name: "POSレジ" },
    { icon: <Smartphone size={24} />, name: "店舗向けITツール" },
    { icon: <Settings size={24} />, name: "各種運営インフラ" },
    { icon: <Coins size={24} />, name: "補助金・助成金" },
  ];

  return (
    <section id="service" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12 md:mb-16">
        <span className="text-[10px] md:text-xs font-bold text-blue-600 tracking-widest uppercase mb-4 block">Services</span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">主な取引サービス</h2>
        <p className="text-sm md:text-lg text-gray-500 max-w-3xl mx-auto">
          店舗運営に必要なあらゆるインフラサービスを一本化してサポートします。
        </p>
      </div>

      <div className="flex overflow-hidden relative">
        <motion.div 
          className="flex gap-4 md:gap-6 whitespace-nowrap"
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Render twice for seamless loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-4 md:gap-6">
              {areas.map((area, index) => (
                <div 
                  key={`${i}-${index}`}
                  className="w-48 md:w-72 bg-white p-8 md:p-12 rounded-3xl md:rounded-[40px] border border-gray-100 shadow-sm flex flex-col items-center gap-4 md:gap-6 flex-shrink-0"
                >
                  <div className="w-14 h-14 md:w-24 md:h-24 rounded-2xl md:rounded-[32px] bg-gray-50 flex items-center justify-center text-gray-900">
                    {React.cloneElement(area.icon as React.ReactElement, { size: 36 })}
                  </div>
                  <span className="font-bold text-base md:text-xl text-gray-900">{area.name}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const PromisesSection = () => {
  const promises = [
    {
      title: "1. 第三者・中立ポジション",
      desc: "特定の企業の代理店ではありません。常に店舗様の側に立ち、最適な選択肢を判断・提案します。",
      icon: <Users className="text-blue-400" size={32} />
    },
    {
      title: "2. 複数社比較が前提",
      desc: "一つのサービスを押し付けることはありません。複数社を比較し、メリット・デメリットを整理した上でご提案します。",
      icon: <TrendingUp className="text-green-400" size={32} />
    },
    {
      title: "3. 相談無料",
      desc: "ご相談からご提案まで、店舗様にご負担いただく費用は一切ありません。",
      icon: <Coins className="text-yellow-400" size={32} />
    }
  ];

  return (
    <section id="promises" className="py-24 md:py-32 bg-[#0f172a] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            オーナー様に信頼される3つの約束
          </h2>
          <p className="text-gray-400 text-lg md:text-2xl">私たちは、店舗様の利益を第一に考えます。</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {promises.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-10 md:p-12 rounded-[2.5rem] border border-white/10 flex flex-col h-full"
            >
              <div className="mb-8">{p.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">{p.title}</h3>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AchievementsSection = ({ onViewAllClick }: { onViewAllClick: () => void }) => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "都内イタリアンレストラン A店",
      category: "新規開業サポート",
      description: "ネット回線、POSレジ、キャッシュレス決済、電力を一括導入。各社との個別交渉を代行し、スムーズな開店を実現。",
      result: "月間固定費 15,000円削減",
      image: ""
    },
    {
      id: 2,
      title: "居酒屋チェーン B社（3店舗）",
      category: "既存店舗見直し",
      description: "電力会社とネット回線の契約を見直し。複数店舗のスケールメリットを活かした価格交渉を実施。",
      result: "年間コスト 450,000円削減",
      image: ""
    },
    {
      id: 3,
      title: "カフェ C店",
      category: "ITツール導入",
      description: "モバイルオーダーシステムと補助金申請をサポート。人件費の削減と売上向上を同時に達成。",
      result: "オペレーション効率 30%向上",
      image: ""
    }
  ];

  return (
    <section id="achievements" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">導入実績</h2>
            <p className="text-base md:text-xl text-gray-500">多くの店舗様で、コスト削減と効率化を実現しています。</p>
          </div>
          <button 
            onClick={onViewAllClick}
            className="text-sm md:text-base text-gray-900 font-bold flex items-center gap-2 hover:gap-3 transition-all group"
          >
            すべての実績を見る <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all p-6 md:p-8 flex flex-col"
            >
              <div className="flex-grow">
                <span className="text-[10px] md:text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
                  {item.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm mb-6 leading-relaxed">{item.description}</p>
              </div>
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs md:text-sm font-medium text-gray-400">成果</span>
                <span className="text-base md:text-lg font-bold text-gray-900">{item.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      step: "STEP 1",
      title: "ご相談",
      desc: "現状の課題やご要望をヒアリングします。オンライン・対面どちらでも可能です。",
      icon: <MessageSquare size={24} className="md:w-8 md:h-8" />
    },
    {
      step: "STEP 2",
      title: "お見積もり",
      desc: "現状、どのサービスにいくら支払ってるかを洗い出します。",
      icon: <ClipboardList size={24} className="md:w-8 md:h-8" />
    },
    {
      step: "STEP 3",
      title: "ご提案",
      desc: "複数社を比較・整理し、最適なプランをご提案します。",
      icon: <LayoutGrid size={24} className="md:w-8 md:h-8" />
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 md:mb-16 leading-tight"
        >
          ご利用の流れは、<br className="md:hidden" />驚くほどシンプルです
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
          
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.3 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-gray-50 shadow-lg flex items-center justify-center text-gray-900 mb-6 md:mb-8"
              >
                {s.icon}
              </motion.div>
              <span className="text-xs md:text-sm font-bold text-gray-400 mb-2">{s.step}</span>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{s.title}</h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-xs">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-[32px] md:rounded-[40px] p-8 md:p-20 text-white overflow-hidden relative"
        >
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">運営会社について</h2>
              <div className="space-y-4 md:space-y-6">
                <div className="flex flex-col sm:flex-row border-b border-white/10 pb-4 gap-1 sm:gap-0">
                  <span className="w-full sm:w-32 text-gray-400 text-sm font-medium">会社名</span>
                  <span className="font-bold text-sm md:text-base">株式会社LiverGate</span>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-white/10 pb-4 gap-1 sm:gap-0">
                  <span className="w-full sm:w-32 text-gray-400 text-sm font-medium">事業内容</span>
                  <span className="font-bold text-sm md:text-base">店舗専門コンシェルジュサービス「カイギョーズ」の運営、店舗経営コンサルティング</span>
                </div>
                <div className="flex flex-col sm:flex-row border-b border-white/10 pb-4 gap-1 sm:gap-0">
                  <span className="w-full sm:w-32 text-gray-400 text-sm font-medium">ミッション</span>
                  <span className="font-bold text-sm md:text-base">「店舗オーナー様の負担を減らし、創造的な時間を増やす」</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-block p-[1px] rounded-full bg-gradient-to-tr from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 mb-6 md:mb-8"
              >
                <div className="bg-gray-900 rounded-full px-6 py-3 md:px-8 md:py-4">
                  <span className="text-xl md:text-2xl font-bold tracking-tight">LiverGate</span>
                </div>
              </motion.div>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                私たちは、飲食業界のインフラを整え、<br className="hidden md:block" />
                すべてのオーナー様が理想の店づくりに<br className="hidden md:block" />
                専念できる社会を目指しています。
              </p>
            </motion.div>
          </div>
          
          {/* Decorative Gradient */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full" 
          />
        </motion.div>
      </div>
    </section>
  );
};

const Footer = ({ onLinkClick }: { onLinkClick: (href: string) => void }) => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-6">
              <button onClick={() => onLinkClick('/')}>
                <img src="logo.png" alt="カイギョーズ" className="h-20 md:h-24 w-auto" referrerPolicy="no-referrer" />
              </button>
            </div>
            <p className="text-gray-500 max-w-md leading-relaxed">
              飲食店オーナー様のための<br className="md:hidden" />専門コンシェルジュサービス。<br />
              インフラ・固定費の最適化を<br className="md:hidden" />中立的な立場でサポートします。
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">サービス</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#about-kaigyo" onClick={(e) => { e.preventDefault(); onLinkClick('#about-kaigyo'); }} className="hover:text-gray-900 transition-colors">カイギョーズとは</a></li>
              <li><a href="#service" onClick={(e) => { e.preventDefault(); onLinkClick('#service'); }} className="hover:text-gray-900 transition-colors">サービス一覧</a></li>
              <li><a href="#promises" onClick={(e) => { e.preventDefault(); onLinkClick('#promises'); }} className="hover:text-gray-900 transition-colors">3つの約束</a></li>
              <li><a href="#process" onClick={(e) => { e.preventDefault(); onLinkClick('#process'); }} className="hover:text-gray-900 transition-colors">ご利用の流れ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">サポート</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#faq" className="hover:text-gray-900 transition-colors">よくある質問</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); onLinkClick('#contact'); }} className="hover:text-gray-900 transition-colors">お問い合わせ</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">利用規約</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-100 gap-6">
          <p className="text-sm text-gray-400">© 2024 LiverGate Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const LineContactView = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
      <div className="max-w-md w-full bg-white p-10 rounded-[40px] shadow-2xl border border-gray-100">
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-600 mx-auto mb-8">
          <MessageSquare size={40} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">公式LINEで無料相談</h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          以下のQRコードをスキャンして、<br />
          カイギョーズ公式LINEを友だち追加してください。<br />
          専門コンシェルジュが丁寧に対応いたします。
        </p>
        
        <div className="aspect-square w-64 mx-auto mb-8 bg-gray-50 rounded-3xl flex items-center justify-center border-2 border-dashed border-gray-200 p-4">
          {/* Placeholder for QR Code */}
          <div className="text-center">
            <div className="w-48 h-48 bg-gray-200 rounded-xl flex flex-col items-center justify-center gap-2">
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-gray-400">LINE QR CODE</span>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={onBack}
          className="text-gray-500 font-medium hover:text-gray-900 transition-colors flex items-center justify-center gap-2 mx-auto"
        >
          <ArrowRight size={18} className="rotate-180" />
          トップページに戻る
        </button>
      </div>
    </div>
  );
};

const CaseStudiesPage = ({ onBack }: { onBack: () => void }) => {
  const cases = [
    {
      id: 1,
      title: "都内イタリアンレストラン A店",
      category: "新規開業サポート",
      description: "ネット回線、POSレジ、キャッシュレス決済、電力を一括導入。各社との個別交渉を代行し、スムーズな開店を実現。",
      result: "月間固定費 15,000円削減",
      image: "",
      tags: ["ネット回線", "POSレジ", "キャッシュレス", "電力"]
    },
    {
      id: 2,
      title: "居酒屋チェーン B社（3店舗）",
      category: "既存店舗見直し",
      description: "電力会社とネット回線の契約を見直し。複数店舗のスケールメリットを活かした価格交渉を実施。",
      result: "年間コスト 450,000円削減",
      image: "",
      tags: ["電力", "ネット回線", "コスト削減"]
    },
    {
      id: 3,
      title: "カフェ C店",
      category: "ITツール導入",
      description: "モバイルオーダーシステムと補助金申請をサポート。人件費の削減と売上向上を同時に達成。",
      result: "オペレーション効率 30%向上",
      image: "",
      tags: ["モバイルオーダー", "補助金サポート"]
    },
    {
      id: 4,
      title: "和食レストラン D店",
      category: "既存店舗見直し",
      description: "キャッシュレス決済の手数料見直しと、新電力への切り替えを実施。固定費の最適化を行いました。",
      result: "年間固定費 120,000円削減",
      image: "",
      tags: ["キャッシュレス", "電力"]
    },
    {
      id: 5,
      title: "バー E店",
      category: "新規開業サポート",
      description: "店舗用Wi-Fiの構築と、防犯カメラシステムの導入をサポート。安心・安全な店舗運営の基盤を構築。",
      result: "初期コスト 20%削減",
      image: "",
      tags: ["Wi-Fi", "防犯カメラ"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          トップページに戻る
        </button>

        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">導入実績</h1>
          <p className="text-lg text-gray-500">カイギョーズがサポートした店舗様の実例をご紹介します。</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden p-6 md:p-8"
            >
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
                {item.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{item.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] bg-gray-100 text-gray-500 px-2 py-1 rounded-md">#{tag}</span>
                ))}
              </div>
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-400">成果</span>
                <span className="text-lg font-bold text-gray-900">{item.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<'home' | 'contact' | 'cases'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleLinkClick = (href: string) => {
    if (href === '/') {
      setView('home');
      return;
    }
    if (href === '#contact') {
      setView('contact');
      return;
    }
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (view === 'contact') {
    return <LineContactView onBack={() => setView('home')} />;
  }

  if (view === 'cases') {
    return <CaseStudiesPage onBack={() => setView('home')} />;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar onLinkClick={handleLinkClick} />
      <main>
        <Hero onConsultClick={() => setView('contact')} />
        <AboutKaigyoSection />
        <ProblemSection />
        <SolutionSection />
        <PromisesSection />
        <ProcessSection />
        <AboutSection />
      </main>
      <Footer onLinkClick={handleLinkClick} />
    </div>
  );
}
