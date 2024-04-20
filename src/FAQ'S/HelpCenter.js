import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const HelpCenter = () => {
    const [mounts, setMounts] = useState({
        mount0: false,
        mount1: false,
        mount2: false,
        mount3: false,
        mount4: false,
        mount5: false,
        mount6: false,
        mount7: false,
    });
    const { t } = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language, (err, t) => {
        if (err) return console.log("Error loading language:", err);
        console.log("Language changed to:", language);
      });
    };
    const toggleMount = (key) => {
        setMounts({
            ...mounts,
            [key]: !mounts[key]
        });
    };

    const helpItems = [
        {
            index: 0,
            question: "Has Coronavirus affected Peace Shop's Service?",
            answer: "We are taking orders as normal...",
            questionA: "هل أثر فيروس كورونا على خدمة Peace Shop؟",
            answerA: "نحن نقوم بتلقي الطلبات كالمعتاد..."
        },
        {
            index: 1,
            question: "Why did I only receive part of my order?",
            answer: "Don’t worry, it’s on its way!...",
            questionA: "لماذا لم أتلقى سوى جزء من طلبي؟",
            answerA: "لا تقلق، الطلب في الطريق!..."
        },
        {
            index: 2,
            question: "What do I do if my order is damaged?",
            answer: "We are so sorry to hear that your order arrived...",
            questionA: "ماذا أفعل إذا كان طلبي تالفًا؟",
            answerA: "نحن نأسف جدًا لسماع أن طلبك وصل تالفًا..."
        },
        {
            index: 3,
            question: "Can I exchange my order?",
            answer: "We do not offer exchanges at this time...",
            questionA: "هل يمكنني استبدال طلبي؟",
            answerA: "نحن لا نقدم خدمة الاستبدال في الوقت الحالي..."
        },
        {
            index: 4,
            question: "My discount code is not working, what do I do?",
            answer: "We are sorry you are having trouble checking out...",
            questionA: "رمز الخصم الخاص بي لا يعمل، ماذا أفعل؟",
            answerA: "نأسف لواجهتك مشكلة في عملية الدفع..."
        },
        {
            index: 5,
            question: "Where are your products shipped from?",
            answer: "We ship from 7 warehouses around the US...",
            questionA: "من أين تشحن منتجاتك؟",
            answerA: "نقوم بالشحن من 7 مستودعات في جميع أنحاء الولايات المتحدة..."
        },
        {
            index: 6,
            question: "Can I expedite my shipping?",
            answer: "Yes! We offer the following expedited shipping options:...",
            questionA: "هل يمكنني تسريع شحنتي؟",
            answerA: "نعم! نحن نقدم الخيارات التالية لتسريع الشحن:..."
        },
        {
            index: 7,
            question: "I received the wrong goods, what do I do?",
            answer: "Although we strive for perfection, we are human and sometimes...",
            questionA: "لقد تلقيت البضائع الخاطئة، ماذا أفعل؟",
            answerA: "على الرغم من أننا نسعى للكمال، إلا أننا بشر وأحيانًا..."
        }
    ];

    return (
        <div className="helpp">
            {helpItems.map(item => (
                <>
                <div key={item.index} className="detailsoff" onClick={() => toggleMount(`mount${item.index}`)}>
                    <p>{t("dir") == "ltr" ? item.question : item.questionA} </p>
                    <button>{mounts[`mount${item.index}`] ? '-' : '+'}</button>
                </div>
                <p>
                    {mounts[`mount${item.index}`] && <p>{t("dir") == "ltr" ? item.answer : item.answerA} </p>}

                    </p>
                    </>
            ))}
        </div>
    );
};

export default HelpCenter;
