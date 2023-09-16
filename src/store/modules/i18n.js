// import {
//   normalizeTrim
// } from "upath";

const state = {
  language: 'en',
  messages: {
    "zh-cn": {
      navigation: {
        title: "乳腺癌预后生存计算器",
        pageCalculator: "计算器",
        pageResult: "预测结果",
        pageInstruction: "说明",
        pageSupport: "支持",
        showResult: "显示预测结果",
        reset: "重置",
        pageHome: '主页'
      },
      calculator: {
        age: "诊断年龄",
        tumorSize: "肿瘤大小",
        positiveLn: "阳性淋巴结个数",
        ER: "雌激素受体(ER)",
        PR: "孕激素受体(PR)",
        grade: "组织学分期",

        months: "月",
        years: '年',
        nros: "不进行放疗的总生存率",
        nrdfs: "不进行放疗的无病生存率",
        ros: "进行放疗的总生存率",
        rdfs: "进行放疗的无病生存率",

        os5: "5年总生存率",
        dfs5: "5年无病生存率",
        os10: "10年总生存率",
        dfs10: "10年无病生存率",
        rt: "进行放疗",
        nort: "不进行放疗",
        positive: "阳性",
        negative: "阴性",
      },
      disclamier: {
        text: `
        <p>
        我们的目的在于给医生提供一个预后预测工具，能够预测1-3个淋巴结阳性乳腺癌患者放疗较不放疗导致的生存差异。计算器可供个人免费下载使用，但不得用于商业用途。</p>
<p>
我们需要强调的是这个工具的目的是为了让医生能够获取更充分的信息，但是不能用于直接的临床决策。我们已尽一切努力确保这里提供的计算是准确的。但是这个计算器提供的预测数据可能与现有的临床经验向左。此外，影响患者预后的因素不仅仅局限于我们纳入的因素，其他因素也需要进行考虑。因此，任何有关于患者治疗的决策不能仅仅基于这一预测给出的结果，还需要综合考虑患者的既往史、现病史和肿瘤特征。医学科学不是一成不变的，人为错误也不可避免，因此这一预测工具得出的结果可能会过时、不完全或者不正确。</P>
<p>
继续点击使用这一预测工具，代表使用者已阅读并同意上述条款。</P>
        `,
        title: '免责声明',
        dontShowAgain: `不再显示此提示`,
        agree: '同意',
        disagree: '不同意'
      },
      otherText: {
        instruction: `
        <h3>
        说明
      </h3>
      <p style="line-height:200%">
      术后放疗在1-3个淋巴结阳性乳腺癌患者中的应用是存在争议的。我们研究的目的在于构建一个列线图以帮助这部分患者预测放疗较不放疗导致的生存差异，从而优化这部分患者的治疗方案。患者诊断年龄、肿瘤大小、肿瘤分级、雌激素和孕激素受体状态以及阳性淋巴结个数被纳入到我们的列线图中。我们的列线图能够较为准确的预测患者5年和10年无病生存率和总生存率。当使用这一网页预测计算器时，医生需要在列出的每个选项上做出选择，然后计算器便可以给出放疗和不放疗患者的生存率。这一经验证的列线图为1-3个淋巴结乳腺癌患者提供了一个非常有用的预后预测工具，从而为术后放疗方案的制定提供一定的个体化建议      </P>
        `,
        contact: `
        <h3>
      联系方式
    </h3>
    <h4>
      地址：
    </h4>
    中国山东省济南市历下区文化西路107号，250012
    <h4>
      电子邮箱:
    </h4>
    ningzhang@sdu.edu.cn
        
        `
      }
    },
    "en": {
      navigation: {
        title: "Breast Cancer Survival Rate Calculator",
        pageCalculator: "Calculator",
        pageResult: "Reslut",
        showResult: "Show Result",
        reset: "Reset",
        pageInstruction: "Instruction",
        pageSupport: "Support",
        pageHome: 'Home'
      },
      calculator: {
        age: "Age At Diagnosis",
        tumorSize: "Tumor Size",
        positiveLn: "Positive Lymph Node",
        ER: "ER",
        PR: "Progestogen Receptor(PR)",
        grade: "Nuclear Grade",

        months: "Months",
        years: "Years",

        nros: "DSS for BCS",
        nrdfs: "DFS for BCS",
        ros: "DSS for BCS+RT",
        rdfs: "DFS for BCS+RT",

        os5: "5-year DSS",
        dfs5: "5-year DFS",
        os10: "10-year DSS",
        dfs10: "10-year DFS",
        rt: "BCS+RT",
        nort: "BCS",
        positive: "Positive",
        negative: "Negative",
      },
      disclamier: {
        text: `
        <p>
        This calculator is aimed to provide physicians with a tool to calculate survival benefit from postmastectomy radiotherapy in breast cancer patients with one to three positive axillary lymph nodes. The calculator is free for personal use only. No permission to distribute this calculator for any commercial purpose. 
</p>
<p>
We emphasize that the purpose of this tool is to inform physicians and that the calculate should not be used for direct decision support. We have made every effort to ensure that the calculator provided here is accurate. However, the probability estimates by the calculator may differ from those found in current clinical practice. In addition, a patient's prognosis may depend on other factors than those taken into account here. Thus, any decisions concerning patient care should not be based only on the use of the calculator, but should also take into account the patient's past history and other current patient and tumor characteristics. As medical science is constantly changing and human error is always possible, the information contained in the prediction tools may be outdated, incomplete or incorrect.
</P>
<p>
By proceeding with use of the model, the user agrees that they have read and agreed with these terms.
</P>
        `,
        title: 'Disclamier',
        dontShowAgain: `Non't show this agien`,
        agree: 'Agree',
        disagree: 'Disagree'
      },
      otherText: {
        instruction: `
        <h3>
        Instructions
      </h3>
      <p>
        Postmastectomy radiotherapy (PMRT) remains debating for breast cancer patients with one to three positive lymph nodes. The aim of this study was to develop a prognostic nomogram to predict the likelihood of long-term survival with and without PMRT in order to optimize the individual locoregional control strategy for this particular cohort. Age, tumor size, grade, estrogen/progestogen receptor status, and number of involved nodes were incorporated into the nomogram and the constructed nomogram demonstrated good accuracy in predicting 5- and 10-year survival. When using this website calculator, physicians need to choose on each variable listed on the calculator and the survival rate with or without PMRT can be obtained. This clinically validated nomogram provided a useful tool to predict 5- and 10-year DSS and OS for patients with one to three positive nodes and can aid tailored clinical decision making by estimating predicted benefit from PMRT.
      </P>`,
        contact: `<h2>
        Contact
      </h2>
      <h4>
        Address:
      </h4>
      No. 107 West Wenhua Road, Ji’nan, Shandong province, China, 250012
      <h4>
        Email:
      </h4>
      ningzhang@sdu.edu.cn
        
        `,
        comments:`OS:Overall Survival;DFS:Disease Free Survival;RT:Radiation Therapy `
      }
    }
  }
}

// getters
const getters = {
  message: (state) => {
    return state.messages[state.language]
  },

}



// mutations
const mutations = {
  setLanguage(state, {
    language
  }) {
    state.language = language
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}