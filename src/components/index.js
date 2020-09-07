import noop from '@feizheng/noop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CLASS_NAME = 'react-details';

export default class ReactDetails extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The changed value.
     */
    value: PropTypes.bool,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * The changed value.
     */
    summary: PropTypes.any
  };

  static defaultProps = {
    onChange: noop
  };

  handleToggle = (inEvent) => {
    const value = inEvent.target.open;
    const { onChange } = this.props;
    onChange({ target: { value } });
  };

  render() {
    const { className, summary, children, value, ...props } = this.props;
    return (
      <details
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        open={value}
        onToggle={this.handleToggle}
        {...props}>
        {summary && (
          <summary className={`${CLASS_NAME}__summary`} children={summary} />
        )}
        {children}
      </details>
    );
  }
}
