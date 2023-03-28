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
                        <h2>京北方信息技术股份有限公司</h2>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Go Development Engineer</h3>
                        <b>
                            <p>Summer 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>项目：U链供应链系统</p>
                <br />
                <ul>
                    <li>
                        <p>负责后台管理系统的开发，包括用户权限管理、数据管理等功能；</p>
                    </li>
                    <li>
                        <p>实现了数据管理系统，包括数据增删改查、数据导入导出等功能；</p>
                    </li>
                    <li>
                        <p>通过调整代码结构和优化 SQL 查询语句，提高了应用程序的可读性和代码扩展性；</p>
                    </li>
                </ul>
                  
                <br />

                <p>项目：后台管理系统</p>
                <br />
                <ul>
                    <li>
                        <p>负责配合后端开发人员，完成页面的交互及接口对接；</p>
                    </li>
                    <li>
                        <p>使用Echarts对订单统计信息进行数据可视化展示；</p>
                    </li>
                    <li>
                        <p>项目进度跟踪，测试上线运行，交付使用，确保项目保质保量完成。</p>
                    </li>
                </ul>
            </div>
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
                        <h3>Front-end Development Engineer</h3>
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
                        <p>在公司传统业务转型升级的背景下, 借鉴互联网知识付费行业的经验, 和团队一起先后完成公司官网改造以及APP版本迭代、功能更新事宜;</p>
                    </li>
                    <li>
                        <p>使用Vue.js和Element UI框架开发平台的前端应用，实现了学生选课、在线学习和考试等功能；</p>
                    </li>
                    <li>
                        <p>设计并实现可复用的UI组件库，提高了开发效率和产品的一致性；</p>
                    </li>
                    <li>
                        <p>协作后端开发人员实现API接口；</p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h2>流利说信息技术有限公司</h2>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://liulishuo.com/'}
                        >
                            <h4>www.liulishuo.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Junior Front-end Development Engineer</h3>
                        <b>
                            <p>Fall 2018 - Summer 2021</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>公司简介: 全国顶尖的成人英语在线学习平台。</p>
                <br />
                <p>日志服务系统: 日志服务承接了上层各微服务的日志推送，提供在线抓取、检索和分析展示等功能</p>
                <br/>
                <ul>
                    <li>
                        <p>主要负责产品模块的开发，完成与后端的接口对接，配合后端的对接联调;</p>
                    </li>
                    <li>
                        <p>项目基于 Vue 开发，使用到了 Axios 与后端数据交互，部分模块会使用到 Element UI、ECharts 等工具库来统一各个业 务模块的页面布局和 UI 交互;</p>
                    </li>
                </ul>
                
                <br />

                <p>DevOps服务管理系统: DevOps 系统是一个对产研流程进行自动化监控的平台</p>
                <br/>

                <ul>
                    <li>
                        <p>同产品沟通，理解需求后，开发通用列表、表单、详情等公共模板;</p>
                    </li>
                    <li>
                        <p>接手项目后, 使用到了 mixins 抽离重复的业务逻辑代码;</p>
                    </li>
                    <li>
                        <p>使用 Vuex 管理数据，vue-router 实现路由跳转;</p>
                    </li>
                    <li>
                        <p>使用 vuepress 构建项目说明文档网页，编写组件使用示例代码，撰写使用说明文档;</p>
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
