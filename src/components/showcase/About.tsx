import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Wenching</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a software engineer graduating from Shijiazhuang
                    Tiedao University with my Bachelor of Economics in 
                    Finance in May, 2018.
                    I am currently looking for a full time role.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my blog. I
                    really hope you enjoy exploring it. Thanks to{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/henryheffernan"
                        style={styles.author}
                    >Heffernan</a> who 
                    designed it. If you have any questions or comments, feel
                    free to contact me using twitter or shoot me an email at{' '}
                    <a href="mailto:liuwenching@126.com">
                    liuwenching@126.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on twitter{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/amwenching"
                    >
                        @amwenching
                    </a>.{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:liuwenching@126.com">
                    liuwenching@126.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    author: {
        textDecoration: 'none',
        color:'black'
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
