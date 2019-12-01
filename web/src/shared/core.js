import Vue from 'vue';
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading, {
    color: '#0856ab'
});
import Toasted from 'vue-toasted';
Vue.use(Toasted, {
    type: 'error',
    theme: "toasted-primary", 
	position: "bottom-right", 
	duration : 5000
});
import moment from 'moment'
import Swal from 'sweetalert2'
import CryptoJS from 'crypto-js';
import numeral from 'numeral';
export default {
    install(Vue){
        Vue.prototype.$user = () => {
            if(sessionStorage.getItem('jwt@user') == null)
                return undefined;
            else
                return CryptoJS.AES.decrypt(sessionStorage.getItem('jwt@user'),'jwtaccess').toString(CryptoJS.enc.Utf8);
        };

        Vue.prototype.$api = function(){
            let token = '';
            if(sessionStorage.getItem('jwt') != null){
                token = CryptoJS.AES.decrypt(sessionStorage.getItem('jwt'),'jwtaccess').toString(CryptoJS.enc.Utf8);
            }
            return axios.create({
                baseURL: 'http://203.223.44.122:8058/',
                headers: { Authorization: 'Bearer ' +  token}
            });
        }

        Vue.prototype.$isValid = (res) => {
            let result = false;
            if(res.data.StatusCode == 200){
                result = true;
            }else{
                if(res.data.Errors.length > 0){
                    let message = '';
                    res.data.Errors.map(item => {
                        message += item.FieldName + ':' + item.Message + '<br/>';
                    });
                    Swal.fire('Error Message', message, 'error');
                }
            }

            return result;
        }

        Vue.prototype.$format = function(value, format){
            if(value != null && value != ''){
                return moment(value).format(format);
            }
        }

        Vue.prototype.$money = function(value){
            return numeral(value).format('0,0');
        }

        Vue.prototype.$toKhmer = function(value){
            let result = '';
            if(value != null){
                let nums = ['០','១','២','៣','៤','៥','៦','៧','៨','៩'];
                for(var i = 0; i < value.length; i++){
                    if(isNaN(value.charAt(i)) == false)
                        result += nums[parseInt(value.charAt(i))];
                    else result += value.charAt(i);
                }
            }
            return result.replace(',', ' ');
        }

        Vue.component('loading', Loading);
    }
}