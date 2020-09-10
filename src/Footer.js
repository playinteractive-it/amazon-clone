import React from 'react';
import './Footer.css';
import Grid from '@material-ui/core/Grid';

function Footer() {
  return (
    <div className="footer">
      <Grid className="footer__content" container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <h4>Get to Know Us</h4>
          <ul className="footer__contentMenu">
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Sustainability</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Tours</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <h4>Make Money with Us</h4>
          <ul className="footer__contentMenu">
            <li>Sell on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell Your Apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
            <li>See More Make Money with Us</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <h4>Amazon Payment Products</h4>
          <ul className="footer__contentMenu">
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <h4>Let Us Help You</h4>
          <ul className="footer__contentMenu">
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates &amp; Policies</li>
            <li>Returns &amp; Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Amazon Assistant</li>
            <li>Help</li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
