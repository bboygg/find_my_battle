import React from 'react';

const MailchimpForm = () => {
  const mailchimpFormHtml = `
    <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
    <style type="text/css">
      #mc_embed_signup { background: #fff; false; clear: left; font: 14px Helvetica, Arial, sans-serif; width: 600px; margin: 0 auto; }
      /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
         We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
    </style>
    <div id="mc_embed_signup">
      <form action="https://gmail.us12.list-manage.com/subscribe/post?u=e4f9fcd40048c299a01784c16&amp;id=9e1f1f8c41&amp;f_id=00e448e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe</h2>
          <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
          <div class="mc-field-group">
            <label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label>
            <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="">
          </div>
          <div hidden=""><input type="hidden" name="tags" value="10531651"></div>
          <div id="mce-responses" class="clear foot">
            <div class="response" id="mce-error-response" style="display: none;"></div>
            <div class="response" id="mce-success-response" style="display: none;"></div>
          </div>
          <div aria-hidden="true" style="position: absolute; left: -5000px;">
            {/* Real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
            <input type="text" name="b_e4f9fcd40048c299a01784c16_9e1f1f8c41" tabindex="-1" value="">
          </div>
          <div class="optionalParent">
            <div class="clear foot">
              <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
              <p style="margin: 0px auto;">
                <a href="http://eepurl.com/iENGmA" title="Mailchimp - email marketing made easy and fun">
                  <span style="display: inline-block; background-color: transparent; border-radius: 4px;">
                    <img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;">
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
    <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
    <script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
  `;

  return (
    <div id="mc_embed_shell" dangerouslySetInnerHTML={{ __html: mailchimpFormHtml }} />
  );
};

export default MailchimpForm;
