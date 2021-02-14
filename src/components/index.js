import noop from '@jswork/noop';
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
     * The summary content.
     */
    summary: PropTypes.any,
    /**
     * When present, it specifies that the details should be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * When present, it specifies that the summary arrow should be display.
     */
    arrow: PropTypes.bool
  };

  static defaultProps = {
    onChange: noop,
    arrow: true
  };

  handleToggle = (inEvent) => {
    const value = inEvent.target.open;
    const { onChange } = this.props;
    onChange({ target: { value } });
  };

  render() {
    const { className, summary, children, value, arrow, ...props } = this.props;
    return (
      <details
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, { 'no-arrow': !arrow }, className)}
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
