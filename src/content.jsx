import Typography from '@mui/joy/Typography';
import { useEffect, useState } from 'react';

export const UcapanPertama = ({ onAnimationEnd }) => {
    const [text, setText] = useState('');
    const fullText = 'haiii... aku ada sedikit ucapan buat kamu';
    // const fullText = '1';
    const delay = 100; // Delay between each character

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex === fullText.length) {
                clearInterval(intervalId);
                onAnimationEnd(); // Trigger onAnimationEnd when animation completes
                return;
            }
            setText(fullText.slice(0, currentIndex + 1));
            currentIndex++;
        }, delay);

        return () => clearInterval(intervalId);
    }, []);

    return <Typography level="h2" fontSize="xl" sx={{ mb: 0.5, color: 'white', textAlign: 'center' }}>{text}</Typography>;
};


export const UcapanKedua = ({ onAnimationEnd }) => {
    const [text, setText] = useState('');
    const fullText = 'aku seneng banget karena aku bisa nemenin kamu sampe sekarang';
    // const fullText = '2';
    const delay = 100; // Delay between each character

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex === fullText.length) {
                clearInterval(intervalId);
                onAnimationEnd();
                return;
            }
            setText(fullText.slice(0, currentIndex + 1));
            currentIndex++;
        }, delay);

        return () => clearInterval(intervalId);
    }, []);

    return <Typography level="h2" fontSize="xl" sx={{ mb: 0.5, color: 'white', textAlign: 'center' }}>{text}</Typography>;
};

export const UcapanKetiga = ({ onAnimationEnd }) => {
    const [text, setText] = useState('');
    const fullText = 'aku bisa ikut bahagia di hari ulang tahun kamu';
    // const fullText = '3';
    const delay = 100; // Delay between each character

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex === fullText.length) {
                clearInterval(intervalId);
                onAnimationEnd();
                return;
            }
            setText(fullText.slice(0, currentIndex + 1));
            currentIndex++;
        }, delay);

        return () => clearInterval(intervalId);
    }, []);

    return <Typography level="h2" fontSize="xl" sx={{ mb: 0.5, color: 'white', textAlign: 'center' }}>{text}</Typography>;
};

export const UcapanKeEmpat = ({ onAnimationEnd }) => {
    const [text, setText] = useState('');
    const fullText = 'seneng banget bisa ngerayain lewat page ini';
    // const fullText = '4';
    const delay = 100; // Delay between each character

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex === fullText.length) {
                clearInterval(intervalId);
                onAnimationEnd();
                return;
            }
            setText(fullText.slice(0, currentIndex + 1));
            currentIndex++;
        }, delay);

        return () => clearInterval(intervalId);
    }, []);

    return <Typography level="h2" fontSize="xl" sx={{ mb: 0.5, color: 'white', textAlign: 'center' }}>{text}</Typography>;
};