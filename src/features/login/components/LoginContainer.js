import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
import { reduxForm } from 'redux-form';
import { loginOperations } from '../duck';


const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = {
    onLogin: loginOperations.login
};

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: 'login'
    })(LoginComponent)
);