import React from 'react';
import { connect } from 'react-redux';
import { switchLanguage } from '../../actions';


function LanguageSwitcher(props) {
  const {language, switchLanguage} = props;
  return (
    <button className="lang-switcher" onClick={switchLanguage}>
      {language}
    </button>
  );
}

const mapStateToProps = state => ({
  language: state.language.language,
});

export default connect(mapStateToProps, {switchLanguage})(LanguageSwitcher);
