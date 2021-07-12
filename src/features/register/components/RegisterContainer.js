import { connect } from 'react-redux';
import RegisterComponent from './RegisterComponent';
import { reduxForm } from 'redux-form';
import { registerOperations } from '../duck';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    onRegister: registerOperations.register
};

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: 'register'
    })(RegisterComponent));