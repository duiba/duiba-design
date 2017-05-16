import Alert from './components/Alert';
import Button from './components/Button';
import Modal from './components/Modal';
import MessageBox from './components/MessageBox';
import Switch from './components/Switch';
import Pagination from './components/Pagination';
import Tooltip from './components/Tooltip';
import Tabs from './components/Tabs';
import Tab from './components/Tab';
import Breadcrumb from './components/Breadcrumb';
import BreadcrumbItem from './components/BreadcrumbItem';
import Checkbox from './components/Checkbox';
import CheckboxGroup from './components/CheckboxGroup';
import Datepicker from './components/Datepicker';
import Timepicker from './components/Timepicker';
import Daterangepicker from './components/Daterangepicker';
import Select from './components/Select';
// import FileUpload from './components/FileUpload';
// import ImageUpload from './components/ImageUpload';
// import MultiImageUpload from './components/MultiImageUpload';
// import RichEditor from './components/RichEditor';

const components = [
  Alert,
  Button,
  Modal,
  MessageBox,
  Switch,
  Pagination,
  Tooltip,
  Tabs,
  Tab,
  Breadcrumb,
  BreadcrumbItem,
  Checkbox,
  CheckboxGroup,
  Datepicker,
  Timepicker,
  Daterangepicker,
  Select
  // FileUpload,
  // ImageUpload,
  // MultiImageUpload,
  // RichEditor
];

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;
//   // locale.use(opts.locale);
//   // locale.i18n(opts.i18n);

  components.map(component => {
    Vue.component(component.name, component);
  });

//   // Vue.use(Loading.directive);

//   // Vue.prototype.$loading = Loading.service;
//   // Vue.prototype.$msgbox = MessageBox;
//   // Vue.prototype.$alert = MessageBox.alert;
//   // Vue.prototype.$confirm = MessageBox.confirm;
//   // Vue.prototype.$prompt = MessageBox.prompt;
//   // Vue.prototype.$notify = Notification;
//   // Vue.prototype.$message = Message;
};

export default {
  version: '0.1.0',
  // locale: locale.use,
  // i18n: locale.i18n,
  install,
  Alert,
  Button,
  Modal,
  MessageBox,
  Switch,
  Pagination,
  Tooltip,
  Tabs,
  Tab,
  Breadcrumb,
  BreadcrumbItem,
  Checkbox,
  CheckboxGroup,
  Datepicker,
  Timepicker,
  Daterangepicker,
  Select
  // FileUpload,
  // ImageUpload,
  // MultiImageUpload,
  // RichEditor
};
