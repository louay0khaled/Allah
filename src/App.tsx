import { useState, useEffect } from "react";

const sections = [
  {
    id: "intro",
    text: `मेरे लोगो, मेरे खून और मिट्टी के साथियो,
मैं आज तुम्हारे सामने एक अजनबी के रूप में नहीं, बल्कि तुममें से ही एक बनकर खड़ा हूँ। मैंने वह जीवन जिया है जो तुम जी रहे हो, मैंने भी उसके सामने सजदा किया जिसके सामने तुम करते हो, और मैंने भी अपने हाथों में एक मूर्ति पकड़ी है, जिससे मैं लाभ या हानि की उम्मीद करता था, बिल्कुल वैसे ही जैसे तुम करते हो। मेरी बातें किसी दूर की जगह से नहीं आतीं, बल्कि एक ऐसे दिल से आती हैं जो कल तक उसी तरह धड़कता था जैसे तुम में से हर एक का दिल धड़कता है।`,
  },
  {
    id: "journey",
    text: `मैंने एक लंबी यात्रा शुरू की, किसी नए धर्म की तलाश में नहीं, बल्कि एक ऐसे सवाल से बचने के लिए जिसने मेरे सीने में एक ऐसा गड्ढा खोद दिया था जिसे समय नहीं भर सकता: हम अपने हाथों से अपने भगवान क्यों बनाते हैं और फिर उनसे डरते हैं?`,
  },
  {
    id: "saw",
    title: "मैंने अपने रास्ते में क्या देखा?",
    text: `मैं एक संदेह करने वाले दिमाग की यात्रा पर निकल पड़ा, जो एक ही तर्क से लैस था: यदि ब्रह्मांड का कोई सच्चा ईश्वर है, तो वह हमारी कल्पना की उपज नहीं हो सकता, और वह केवल एक ही हो सकता है। मनुष्यों के हाथों से बना कोई भी भगवान अनिवार्य रूप से अपने निर्माता से छोटा होता है। निर्माता अपनी रचना के सामने कैसे सजदा कर सकता है? यह पुराने विश्वास की दीवार में पहली दरार थी।
मैं हर चीज की जड़ों तक वापस गया, धर्मों से पहले के समय में, स्वयं ब्रह्मांड तक। ब्रह्मांड बिना जीभ के क्या कहता है?`,
  },
  {
    id: "proof",
    title: "वह प्रमाण जिसने मुझे हरा दिया:",
    text: `किसी भी मूर्ति के सामने खड़े हो जाओ और उससे पूछो: "तुम्हें किसने बनाया?" इतिहास तुम्हें बताएगा: "तुम्हें अमुक व्यक्ति ने अमुक वर्ष में बनाया।" ब्रह्मांड से पूछो: "तुम्हें किसने बनाया?" यह चुप रहेगा, क्योंकि हममें से किसी ने भी इसका जन्म नहीं देखा। लेकिन ब्रह्मांड की चुप्पी कोई जवाब नहीं है, यह सबसे बड़ा सवाल है।
मैंने अपने दिमाग से देखा कि यह विशाल ब्रह्मांड, अपने सटीक नियमों के साथ, जिसमें यदि एक कण भी विचलित हो जाए, तो सब कुछ नष्ट हो जाएगा, शाश्वत नहीं हो सकता और संयोग नहीं हो सकता। संयोग व्यवस्था नहीं बनाता है, और अराजकता निरंतरता को जन्म नहीं देती है। मेरे साथ इस तथ्य पर विचार करें: संयोग से हमारे जैसे ब्रह्मांड के उत्पन्न होने की संभावना एक ऐसी संख्या है जिसका मानव भाषा में कोई नाम नहीं है, यह शून्य से भी छोटा है। ये उपदेशकों के शब्द नहीं हैं, यह नास्तिकों द्वारा विकसित गणित है।
इसलिए, एक निर्माता का होना अनिवार्य है। और यह निर्माता दो नहीं हो सकते, क्योंकि दो ईश्वरों के अस्तित्व का अर्थ है उनके बीच मतभेद की संभावना, और यदि वे भिन्न होते, तो ब्रह्मांड नष्ट हो जाता: "यदि आकाश और पृथ्वी में अल्लाह के सिवा अन्य ईश्वर होते, तो वे दोनों नष्ट हो जाते।" यह केवल एक कुरान की आयत नहीं है जो मैं तुम्हें सुना रहा हूँ, बल्कि यह एक तार्किक प्रमाण है: किसी भी जटिल प्रणाली को केवल एक ही दिमाग द्वारा नियंत्रित किया जा सकता है, अन्यथा आदेश टकराएंगे और प्रणाली ढह जाएगी।
तो, एक ईश्वर, जिसका कोई भागीदार नहीं है। यह ईश्वर कहाँ है?
मुझे तुम्हें बताने दो: वह किसी पत्थर में नहीं है। किसी मूर्ति में नहीं है। किसी नेक इंसान की कब्र में नहीं है। किसी तारे या सूरज में नहीं है। क्योंकि इन सभी चीजों का एक आकार, स्थान और समय होता है, और जो कुछ भी स्थान और समय तक सीमित है, वह एक रचना है। और निर्माता एक रचना नहीं हो सकता। यही एकेश्वरवाद (तौहीद) है, यह कोई नारा नहीं है, बल्कि यह अस्तित्व का एकमात्र उचित स्पष्टीकरण है।`,
  },
  {
    id: "message",
    title: "मुझे कैसे पता चला कि अंतिम संदेश ही सत्य है?",
    text: `यहाँ सबसे कठिन परीक्षा थी। मेरे दिमाग ने स्वीकार किया कि एक ईश्वर है। लेकिन क्या इस ईश्वर ने हमें बिना मार्गदर्शन के छोड़ दिया? यह उसकी बुद्धिमत्ता के योग्य नहीं है। उसने निश्चय ही हमें किसी को भेजा होगा जो हमें उसका आदेश दे। और यहाँ मैंने प्रमुख संदेशों के बीच, बिना किसी पूर्वग्रह के, एक विशुद्ध रूप से तर्कसंगत तुलना शुरू की।
मैंने धर्मों को अपने सामने इकट्ठा किया, उन्हें तार्किक और ऐतिहासिक विच्छेदन की मेज पर रखा, और उन्हें तीन सख्त मानदंडों के साथ देखा:`,
  },
];

const criteria = [
  {
    number: "01",
    title: "पहला मानदंड: ईश्वर के बारे में विचार की स्पष्टता।",
    text: `मैंने यहूदी धर्म को देखा, तो एक महान ईश्वर पाया, लेकिन उनके ग्रंथों में वह पछताता है, थकता है, और उसके हाथ और चेहरा हैं। दिमाग ने विद्रोह किया: यह एकमात्र, पूर्ण ईश्वर कैसे हो सकता है? मैंने ईसाई धर्म को देखा, तो मुझे बताया गया: ईश्वर तीन में एक है, और एक तीन के बराबर है। दिमाग पूरी तरह से रुक गया। यह विश्वास नहीं है, यह तर्क की आत्महत्या का अनुरोध है। फिर मैंने इस्लाम को देखा, तो मुझे एक पूरी सुरा (अध्याय) मिली - सुरा अल-इखलास - जो मेरे दिमाग तक पहुंचने वाली हर चीज का सार प्रस्तुत करती है: "कहो, वह अल्लाह एक है। अल्लाह निरपेक्ष है। न उसने किसी को जना और न वह किसी से जन्मा। और उसके समान कोई नहीं है।" पूर्ण एकता, कोई भौतिक रूप नहीं, कोई बहुलता नहीं, कोई बंद रहस्य नहीं।`,
    result: "परिणाम: 1-0 इस्लाम के पक्ष में।",
  },
  {
    number: "02",
    title: "दूसरा मानदंड: संदेश की पुस्तक की विश्वसनीयता।",
    text: `मैंने अपने आप से कहा: यदि ईश्वर कोई संदेश भेजता, तो वह उसकी रक्षा करता। ऐसा बहुत कम होता है कि कोई राजदूत एक खतरनाक संदेश किसी डाकिया को सौंप दे, और फिर संदेश को बिना हस्तक्षेप के फटने, जलने और फिर से लिखे जाने दे। मैंने तोराह के इतिहास की खोज की, और पाया कि यह उसके नबी के सैकड़ों साल बाद, अज्ञात लेखकों द्वारा लिखा गया था, और इसकी प्रतियों के बीच मतभेद हैं। मैंने गॉस्पेल (इंजील) की खोज की, तो पाया कि वे ईसा मसीह के दशकों बाद लिखे गए थे, और उनके चार लेखक चश्मदीद गवाह नहीं हैं, और उनकी पांडुलिपियों के बीच हजारों मतभेद हैं, और इसकी सबसे पुरानी पूरी प्रति ग्रीक में है, हालांकि ईसा की भाषा अरामी थी।
फिर मैं कुरान पर आया। मैंने इतिहास से पूछा: इसे किसने लिखा? उसने कहा: इसे किसी इंसान ने नहीं लिखा, बल्कि यह एक अनपढ़ व्यक्ति पर अवतरित हुआ, और उनके जीवनकाल में संकलित किया गया, और उन्होंने इसे अपने लेखकों को लिखवाया, और इसे पुरुषों और महिलाओं के दिलों में याद किया गया। और मैंने पाठ्य आलोचना से पूछा: तुम्हारे पास कुरान की कितनी प्रतियां हैं? उसने कहा: केवल एक प्रति। कोई "खोजी गई प्रति" नहीं है जो हमारे हाथों में मौजूद कुरान का खंडन करती हो। सना, पेरिस और तुर्की में पहली हिजरी सदी की पांडुलिपियों में समान शब्द, समान अक्षरों के साथ हैं।`,
    result: "परिणाम: 2-0.",
  },
  {
    number: "03",
    title: "तीसरा मानदंड: नबी की छवि की प्रामाणिकता।",
    text: `मैंने मुहम्मद ﷺ के इतिहास को देखा, शुरुआत में एक रसूल के रूप में नहीं, बल्कि एक ऐतिहासिक व्यक्ति के रूप में। मैंने उनकी जीवनी को अद्भुत सटीकता के साथ दर्ज पाया, जैसे कि वह हमारे बीच रह रहे हों। उनकी नींद, उनके भोजन, उनके क्रोध और उनकी मुस्कान का विवरण। एक व्यक्ति जिसने शादी की, सेनाओं का नेतृत्व किया, एक राज्य पर शासन किया, और अपना सिर झुकाकर मक्का में प्रवेश किया। वह आकाश में गायब नहीं हुए, बल्कि मरे और एक कमरे में दफन किए गए, और उनकी कब्र ज्ञात है। यह एक ऐसे व्यक्ति का जीवन है जिसे पालन करने के लिए भेजा गया था, न कि आधा ईश्वर जिसकी पूजा की जाए।
फिर मैंने उनके संदेश की पूर्णता को देखा: उन्होंने केवल यह नहीं कहा कि "मैं कानून को पूरा करता हूँ," बल्कि वह एक पूर्ण कानून, शासन की व्यवस्था, परिवार, विरासत, अर्थव्यवस्था, युद्ध और शांति के नियमों के साथ आए। हमें अच्छे इंसान बनने के लिए जो कुछ भी चाहिए वह सब मौजूद है। एक अंतिम संदेश, क्योंकि यह पूर्ण है।`,
    result: "परिणाम: 3-0.",
  },
];

const surrenderText = `मेरे लोगो, उस क्षण मुझे एहसास हुआ कि मेरे दिमाग के पास कहने के लिए केवल एक ही शब्द बचा है। मैं मूर्ति के साथ जो कुछ भी कर रहा था वह केवल एक आदत थी, मेरे पूर्वजों का डर, बदलाव का डर, समूह की गुलामी, न कि सच्चाई की। तभी, मैंने वह शब्द कहा जिसने मेरा जीवन बदल दिया: "मैं गवाही देता हूँ कि अल्लाह के सिवा कोई सच्चा ईश्वर नहीं है, और मैं गवाही देता हूँ कि मुहम्मद अल्लाह के रसूल हैं" (अशहदु अल्ला इलाहा इल्लल्लाह, व अशहदु अन्ना मुहम्मदन रसूलुल्लाह)।
मैंने किसी इंसान के सामने सजदा नहीं किया। मुहम्मद कोई ईश्वर नहीं हैं, वह एक इंसान हैं, लेकिन वह पूर्ण इंसान हैं जिसे ईश्वर ने अपने अंतिम रसूल के रूप में चुना। मैं किसी पत्थर के सामने नहीं झुका। मैं उसके सामने झुका जिसने उस पत्थर को बनाया और मुझे बनाया। मैं पदार्थ की पूजा से मुक्त होकर पदार्थ के निर्माता की पूजा की ओर आ गया।`;

const invitationText = `मैं तुम्हें अपनी भावनाओं का पालन करने के लिए नहीं बुला रहा हूँ, न ही किसी ऐसे सपने पर विश्वास करने के लिए जो मैंने देखा है। मैं तुम्हें उसी मानसिक पथ पर चलने के लिए आमंत्रित कर रहा हूँ जिस पर मैं चला, केवल एक शर्त के साथ: बस एक पल के लिए अपने दिलों को डर और आदत से मुक्त करो।`;

const questions = [
  "क्या यह संभव है कि यह महान ब्रह्मांड बिना किसी निर्माता के हो?",
  "और क्या यह संभव है कि वह निर्माता एक से अधिक हो?",
  "और क्या यह संभव है कि वह निर्माता हमें बिना किसी मार्गदर्शन के छोड़ दे?",
  "और क्या आज पृथ्वी पर कोई ऐसी किताब है जो कुरान के अलावा ईश्वर का शाश्वत वचन होने का दावा करती हो?",
  "और क्या \"ला इलाहा इल्लल्लाह मुहम्मदुर रसूलुल्लाह\" से अधिक स्पष्ट ईश्वर तक पहुंचने का कोई रास्ता है?",
];

const closingText = `यदि तुम डर की बेड़ियों को तोड़ते हो, और रचना की आज्ञाकारिता से निर्माता की आज्ञाकारिता की ओर आते हो, तो तुम उस सच्ची स्वतंत्रता का स्वाद चखोगे जिसका मैंने स्वाद चखा है। तुम केवल अल्लाह के दास बन जाओगे, और ईश्वर की कसम, यही पूरा सम्मान है।`;

const finalText = `यह तुम्हारे लिए मेरा संदेश है, जिसे मैंने अपने दिल के खून, अपने दिमाग की ईमानदारी और परलोक की उम्मीद के साथ लिखा है। और अल्लाह जिसे चाहता है सीधे रास्ते की ओर मार्गदर्शन करता है।`;

function StarField() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.6 + 0.2,
            animation: `twinkle ${Math.random() * 4 + 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-white/10">
      <div
        className="h-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white font-sans relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Noto Sans Devanagari', 'Devanagari', serif; }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.4); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease forwards; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .shimmer-text {
          background: linear-gradient(90deg, #f59e0b, #fde68a, #f59e0b, #fbbf24, #f59e0b);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .glass-card {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .quote-box {
          background: linear-gradient(135deg, rgba(251,191,36,0.08), rgba(245,158,11,0.04));
          border-left: 3px solid #f59e0b;
        }
        .section-divider {
          background: linear-gradient(90deg, transparent, rgba(245,158,11,0.5), transparent);
        }
        .criterion-card {
          background: linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.04));
          border: 1px solid rgba(99,102,241,0.2);
        }
        .result-badge {
          background: linear-gradient(135deg, #065f46, #047857);
          border: 1px solid rgba(52,211,153,0.3);
        }
        .shahadah-box {
          background: linear-gradient(135deg, rgba(245,158,11,0.15), rgba(251,191,36,0.08));
          border: 1px solid rgba(245,158,11,0.4);
        }
        .question-item {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-left: 2px solid rgba(245,158,11,0.6);
        }
        .ornament {
          background: linear-gradient(90deg, transparent, rgba(245,158,11,0.6), transparent);
        }
        body { overflow-x: hidden; }
      `}</style>

      <StarField />
      <ScrollProgress />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 z-10">
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Decorative top ornament */}
          <div className="flex items-center justify-center mb-8 animate-float">
            <span className="text-5xl">☪</span>
          </div>

          <div className="ornament h-px w-32 mx-auto mb-8" />

          <p className="text-amber-300/70 text-sm tracking-[0.3em] uppercase mb-4 font-light">
            मेरे लोगों के नाम एक संदेश
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="shimmer-text">
              मंदिर से प्रकाश तक
            </span>
            <br />
            <span className="text-white/90 text-2xl md:text-3xl lg:text-4xl font-normal">
              की मेरी यात्रा
            </span>
          </h1>

          <div className="ornament h-px w-64 mx-auto mt-8 mb-12" />

          <div className="flex justify-center gap-2 mt-4">
            {["✦", "✦", "✦"].map((s, i) => (
              <span
                key={i}
                className="text-amber-400/50 text-xs"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-amber-400/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10 max-w-3xl mx-auto px-4 pb-24">

        {/* Opening paragraphs */}
        <div className="glass-card rounded-2xl p-8 md:p-10 mb-10 animate-fadeInUp">
          <div className="text-white/90 text-lg md:text-xl leading-relaxed space-y-6">
            {sections.slice(0, 2).map((sec) => (
              <p key={sec.id}>{sec.text}</p>
            ))}
          </div>
        </div>

        {/* Section: What I saw */}
        <div className="mb-10">
          <SectionHeader title={sections[2].title!} icon="🔭" />
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <p className="text-white/90 text-lg leading-relaxed whitespace-pre-line">
              {sections[2].text}
            </p>
          </div>
        </div>

        {/* Section: Proof */}
        <div className="mb-10">
          <SectionHeader title={sections[3].title!} icon="⚖️" />
          <div className="glass-card rounded-2xl p-8 md:p-10 space-y-6">
            {sections[3].text.split("\n").map((para, i) => (
              <p key={i} className="text-white/90 text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Section: How I knew */}
        <div className="mb-10">
          <SectionHeader title={sections[4].title!} icon="📖" />
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <p className="text-white/90 text-lg leading-relaxed whitespace-pre-line">
              {sections[4].text}
            </p>
          </div>
        </div>

        {/* Three Criteria */}
        <div className="mb-10 space-y-6">
          {criteria.map((c) => (
            <div key={c.number} className="criterion-card rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl font-bold text-indigo-400/40 leading-none">
                  {c.number}
                </span>
                <h3 className="text-amber-300 text-xl font-semibold leading-snug mt-1">
                  {c.title}
                </h3>
              </div>
              <div className="space-y-4">
                {c.text.split("\n").map((para, i) => (
                  <p key={i} className="text-white/90 text-lg leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              <div className="mt-6">
                <span className="result-badge inline-block px-5 py-2 rounded-full text-emerald-300 font-semibold text-sm">
                  ✓ {c.result}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Surrender Moment */}
        <div className="mb-10">
          <SectionHeader title="समर्पण का क्षण" icon="🌙" />
          <div className="glass-card rounded-2xl p-8 md:p-10 space-y-6">
            {surrenderText.split("\n").map((para, i) => (
              <p key={i} className="text-white/90 text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Shahadah highlight box */}
          <div className="shahadah-box rounded-2xl p-8 md:p-10 mt-6 text-center">
            <p className="text-amber-200 text-xl md:text-2xl font-semibold leading-relaxed mb-4">
              "मैं गवाही देता हूँ कि अल्लाह के सिवा कोई सच्चा ईश्वर नहीं है,
              और मैं गवाही देता हूँ कि मुहम्मद अल्लाह के रसूल हैं"
            </p>
            <p className="text-amber-400/80 text-lg">
              (अशहदु अल्ला इलाहा इल्लल्लाह, व अशहदु अन्ना मुहम्मदन रसूलुल्लाह)
            </p>
          </div>
        </div>

        {/* Invitation */}
        <div className="mb-10">
          <SectionHeader title="मैं आज तुम्हें क्यों आमंत्रित कर रहा हूँ?" icon="💡" />
          <div className="glass-card rounded-2xl p-8 md:p-10 mb-6">
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              {invitationText}
            </p>
            <p className="text-amber-300 font-medium mb-4">अपने आप से पूछो:</p>
            <div className="space-y-4">
              {questions.map((q, i) => (
                <div key={i} className="question-item rounded-xl p-4 pl-5">
                  <p className="text-white/85 text-base leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-10">
            <p className="text-white/90 text-lg leading-relaxed">
              {closingText}
            </p>
          </div>
        </div>

        {/* Final Shahadah */}
        <div className="mb-10">
          <div className="shahadah-box rounded-2xl p-8 md:p-10 text-center">
            <div className="text-5xl mb-6 animate-float">☪</div>
            <p className="text-amber-200 text-xl md:text-2xl font-bold leading-relaxed mb-3">
              (मैं गवाही देता हूँ कि अल्लाह के सिवा कोई सच्चा ईश्वर नहीं है,
              और मैं गवाही देता हूँ कि मुहम्मद अल्लाह के रसूल हैं)
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="glass-card rounded-2xl p-8 md:p-10 text-center">
          <div className="ornament h-px w-32 mx-auto mb-8" />
          <p className="text-white/80 text-lg leading-relaxed italic">
            {finalText}
          </p>
          <div className="ornament h-px w-32 mx-auto mt-8" />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-10 text-white/20 text-sm">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="ornament h-px w-16" />
          <span className="text-amber-400/40 text-lg">☪</span>
          <div className="ornament h-px w-16" />
        </div>
        <p>مَنْ أَرَادَ اللهُ بِهِ خَيْرًا هَدَاهُ</p>
      </footer>
    </div>
  );
}

function SectionHeader({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-2xl">{icon}</span>
      <h2 className="text-xl md:text-2xl font-bold text-amber-300 leading-snug">
        {title}
      </h2>
    </div>
  );
}
