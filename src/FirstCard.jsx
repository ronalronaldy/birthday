import * as React from 'react';
import giphyGif from './giphy.gif';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import { UcapanPertama, UcapanKedua, UcapanKetiga, UcapanKeEmpat } from './content';
import Love from './Love';
import './font.css'

export default function IntroCard({ handleClick }) {
    const [showTypingAnimation, setShowTypingAnimation] = React.useState(false);
    const [showUcapanPertama, setShowUcapanPertama] = React.useState(true);
    const [showUcapanKedua, setShowUcapanKedua] = React.useState(false);
    const [showUcapanKetiga, setShowUcapanKetiga] = React.useState(false);
    const [showUcapanKeEmpat, setShowUcapanKeEmpat] = React.useState(false);

    const [showCButton, setShowCButton] = React.useState(false);
    const [showCandle, setShowCandle] = React.useState(false);

    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowTypingAnimation(true);
        }, 500);

        // Clean up the timeout
        return () => clearTimeout(timeoutId);
    }, []);

    const handleUcapanPertamaAnimationEnd = () => {
        setTimeout(() => {
            setShowUcapanPertama(false);
            setShowUcapanKedua(true);
        }, 2000);
    };

    const handleUcapanKeduaAnimationEnd = () => {
        setTimeout(() => {
            setShowUcapanKedua(false);
            setShowUcapanKetiga(true);
        }, 2000);
    };

    const handleUcapanKetigaAnimationEnd = () => {
        setTimeout(() => {
            setShowUcapanKetiga(false);
            setShowUcapanKeEmpat(true);
        }, 2000);
    };

    const handleShowCButton = () => {
        setTimeout(() => {
            setShowUcapanKeEmpat(false);
            setShowCButton(true);
        }, 2000);
    };

    const handleShowCandle = () => {
        setShowCButton(false);
        setShowCandle(true);
    };

    return (
        <Stack
            direction="column"
            alignItems="center"
            spacing={12}
            sx={{ animation: 'reveal 3s ease forwards' }}
        >
            {/* <img
                src={giphyGif}
                style={{
                    width: '50%',
                    height: 'auto',
                    alignItems: 'center',
                    animation: 'reveal 6s ease forwards'
                }}
                alt="Giphy GIF"
            /> */}
            {showTypingAnimation &&
                <>
                    {showUcapanPertama && (
                        <UcapanPertama
                            key="ucapanPertama"
                            onAnimationEnd={handleUcapanPertamaAnimationEnd}
                        />
                    )}
                    {showUcapanKedua && (
                        <UcapanKedua
                            key="ucapanKedua"
                            onAnimationEnd={handleUcapanKeduaAnimationEnd}
                        />
                    )}
                    {showUcapanKetiga && (
                        <UcapanKetiga
                            key="ucapanKeTiga"
                            onAnimationEnd={handleUcapanKetigaAnimationEnd}
                        />
                    )}
                    {showUcapanKeEmpat && (
                        <UcapanKeEmpat
                            key="ucapanEmpat"
                            onAnimationEnd={handleShowCButton}
                        />
                    )}
                    {showCButton &&
                        <Button variant="soft" size="lg" color="warning" onClick={handleShowCandle}>For You (click)</Button>
                    }

                    {showCandle &&
                        <>
                            <Stack
                                direction="column"
                                alignItems="center"
                                spacing={3}
                                sx={{ animation: 'reveal 6s ease forwards' }}
                            >
                                <img
                                    src={giphyGif}
                                    style={{
                                        width: '50%',
                                        height: 'auto',
                                        alignItems: 'center',
                                    }}
                                    alt="Giphy GIF"
                                />
                                <Button variant='outlined' sx={{ color: '#ef476f' }} onClick={handleClick}>Next</Button>
                            </Stack>
                            <Love />
                        </>
                    }
                </>
            }
        </Stack>
    );
}
