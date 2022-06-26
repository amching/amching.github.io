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
                <p>公司简介: 建筑行业的极客时间。</p>
                <br />
                <ul>
                    <li>
                        <p>在公司传统业务转型升级的背景下, 借鉴互联网知识付费行业的经验, 和团队一起先后完成公司官网改造以及APP版本迭 代、功能更新事宜;</p>
                    </li>
                    <li>
                        <p>与不同部门的运营负责人对接, 商议需求, 整理需求, 对需求设置不同优先级;</p>
                    </li>
                    <li>
                        <p>项目进度跟踪, 测试上线运行, 交付使用, 确保项目保质保量完成。</p>
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
                            <p>Fall 2018 - Summer 2021</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>公司简介: 全国顶尖的成人英语在线学习平台。</p>
                <br />
                <p>前期(2018.10-2020.04)作为前端工程师参与了日志服务系统、DevOps 系统前端功能的开发。日志服务承接了上层各 微服务的日志推送, 提供在线抓取、检索和分析展示等功能;DevOps 系统是一个对产研流程进行自动化监控的平台。</p>
                <br/>
                <ul>
                    <li>
                        <p>主要负责产品模块的开发, 完成与后端的接口对接, 配合后端的对接联调;</p>
                    </li>
                    <li>
                        <p>项目基于 Vue 开发, 使用到了 Axios 与后端数据交互, 部分模块会使用到 ElementUI、ECharts 等工具库来统一各个 业务模块的页面布局和 UI 交互;</p>
                    </li>
                    <li>
                        <p>同产品沟通, 理解需求后, 开发通用列表、表单、详情等公共模板;</p>
                    </li>
                    <li>
                        <p>会使用 Vuex 管理数据, vue-router 实现路由跳转。</p>
                    </li>
                </ul>
                
                <br />

                <p>后期(2020.04-2021.08)作为项目经理, 主要负责了后台运营系统的产品需求对接以及落地工作;</p>
                <br/>
                <ul>
                    <li>
                        <p>主要从事进度管理和监控, 帮助团队在工作中应用敏捷实践;</p>
                    </li>
                    <li>
                        <p>量化成员工作任务, 跟踪项目进度, 协调组员合作。</p>
                    </li>
                </ul>

            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>上海码以信息科技有限公司</h2>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.aethercoder.com/'}
                        >
                            <h4>www.aethercoder.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Frontend Engineer</h3>
                        <b>
                            <p>Summer 2018</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>公司简介:初创型加密货币管理与交易平台。</p>
                <br />
                <ul>
                    <li>
                        <p>主要从事交易所主站基于 React 的若干页面、模块的开发与维护;</p>
                    </li>
                    <li>
                        <p>对接、梳理 HTTP 和 WebSocket 接口数据, 使用了 Redux 做数据状态流转;</p>
                    </li>
                    <li>
                        <p>参与了内部基于 Vue 的交易报表系统的开发与维护。</p>
                    </li>
                </ul>
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
