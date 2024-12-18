export const setUiSelectorByIndex = (selector: string) => `android=index(${selector})`;
export const setUiSelectorById = (selector: string) => `android=resourceId("com.android.permissioncontroller:id/${selector}")`;
export const setUiSelectorByIdAndIndex = (selector: string, selector2: string) => `android=resourceId("id.astra.store.dev:id/${selector}").index(${selector2})`;
export const setUiSelectorByIdAndClassAndIndex = (selector: string, selector2: string, selector3: string) => `android=resourceId("id.astra.store.dev:id/${selector}").className("${selector2}").index(${selector3})`;
export const setUiSelectorByText = (selector: string) => `android=text("${selector}")`;
export const setUiSelectorByClassName = (selector: string) => `android=className("${selector}")`;
export const setUiSelectorByClassAndIndex = (selector: string, selector2: string) => `android=className("${selector}").index(${selector2})`;
export const setUiSelectorByIdAndChild = (selector: string, selector2: string) => `android=resourceId("id.astra.adp.astraku:id/${selector}").childSelector(new UiSelector().className("${selector2}"))`;
export const setUiSelectorByIdAndChildId = (selector: string, selector2: string) => `android=resourceId("id.astra.adp.astraku:id/${selector}").childSelector(new UiSelector().resourceId("id.astra.adp.astraku:id/${selector2}"))`;
export const setUiSelectorByElementId = (selector: string) => `android=elementId("${selector}")`;

export const setXpathButtonById = (id: string) => `//android.widget.Button[@resource-id="id.astra.store.dev:id/${id}"]`;
export const setXpathLinearLayoutById = (id: string) => `//android.widget.LinearLayout[@resource-id="id.astra.store.dev:id/${id}"]`;
export const setXpathLinearLayoutByContent = (content: string) => `//android.widget.LinearLayout[@content-desc="${content}"]`;
export const setXpathTextViewById = (id: string) => `//android.widget.TextView[@resource-id="id.astra.store.dev:id/${id}"]`;
export const setXpathContentDesc = (content: string) => `//android.view.ViewGroup[@content-desc="${content}"]/android.view.ViewGroup[1]`;
export const setXpathContentDescAndId = (content: string, id: string) => `//android.view.ViewGroup[@content-desc="${content}"].resourceId("id.astra.adp.astraku:id/${id}")`;
export const setXpathContentDescImage = (id: string) => `//android.widget.ImageView[@content-desc="${id}"]`;
export const setXpathContentDescFrame = (content: string) => `//android.widget.FrameLayout[@content-desc="${content}"]`;
export const setUiSelectorByCustomContainsText = (selector: string) => `//*[contains(@text,"${selector}")]`; //lcsmoehr0020
export const setUiSelectorByCustomContainsContentDesc = (contentDesc: string, sub: string) => `//*[contains(@content-desc,"${contentDesc}")]${sub}`; //lcsmoehr0020
export const setXpathSelectorTextAndBounds = (text: string, bounds: string) => `//*[@text="${text}" and @bounds="${bounds}"]`; //lcsmoehr0020
export const setXpathSelectorTextAndResourceId = (text: string, id: string) => `//*[@text="${text}" and @resource-id="${id}"]`; //lcsmoehr0020
export const setXpathSelectorTextAndIndex = (text: string, index: string) => `//*[@text="${text}" and @index="${index}"]`; //lcsmoehr0020
export const setXpathSelectorTextAndClickable = (text: string, clickable: string) => `//*[@text="${text}" and @clickable="${clickable}"]`; //lcsmoehr0020
export const setXpathSelectorContentDescAndSub = (desc: string, sub: string) => `//*[@content-desc="${desc}"]/${sub}`; //lcsmoehr0020
export const setXpathSelectorContentDescAndUniq = (desc: string, uniq: string) => `//*[@content-desc="${desc}"][${uniq}]`; //lcsmoehr0020
export const setXpathSelectorClassAndIndex = (Class: string, index: string) => `//*[@class="${Class}" and @index="${index}"]`; //lcsmoehr0020
export const setXpathContentDescView = (content: string) => `//android.view.View[@content-desc="${content}"]`;
export const setXpathContentDescViewGroup = (content: string) => `//android.view.ViewGroup[@content-desc="${content}"]`;
export const setUiSelectorByResouceId = (content: string) => `//*[@resource-id="${content}"]`;
export const setXpathContentDescButton = (content: string) => `//android.widget.Button[@content-desc="${content}"]`;
export const setXpathSelectorTextAndClass = (content: string, Class: string) => `//${Class}[@text="${content}"]`;
