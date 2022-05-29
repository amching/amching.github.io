import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <br />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>北京筑龙伟业科技有限公司</h2>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.zhulong.com/'}
                        >
                            <h4>www.zhulong.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Project Manager</h3>
                        <b>
                            <p>Fall 2021 - Spring 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    -
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            -
                        </p>
                    </li>
                    <li>
                        <p>
                            -
                        </p>
                    </li>
                    <li>
                        <p>
                            -
                        </p>
                    </li>
                    <li>
                        <p>
                            -
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>上海流利说信息技术有限公司</h2>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://liulishuo.com/'}
                        >
                            <h4>www.liulishuo.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Frontend Engineer & Product Manager</h3>
                        <b>
                            <p>Summer 2019 - Summer 2021</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    -
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            -
                        </p>
                    </li>
                    <li>
                        <p>
                            -
                        </p>
                    </li>
                    <li>
                        <p>
                            -
                        </p>
                    </li>
                    <li>
                        <p>
                            -
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>上海爱可生信息技术股份有限公司</h2>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.actionsky.com/'}
                        >
                            <h4>www.actionsky.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Frontend Engineer</h3>
                        <b>
                            <p>Summer 2018, Summber 2019</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    所在公司是国内知名的 MySQL 分布式解决方案技术提供商, B 端产品,
                    该产品服务于工行、农行、太平洋保险、国家电网等具备超大规模数据集的企业。
                    <br />
                    所在前端项目组主要负责开发和维护 Web 前端图形化操作界面。
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
