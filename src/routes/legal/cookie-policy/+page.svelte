<script>
  import Header from "$lib/header/Header.svelte";
  import Gradient from "$lib/backgrounds/Gradient.svelte";
  import Footer from "$lib/footer/Footer.svelte";
</script>

<Gradient>
  <Header/>
    <!-- svelte-ignore missing-declaration -->
    <div class="relative w-full px-6 py-12 overflow-hidden md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
      <div class="mt-8 prose prose-slate max-w-prose mx-auto prose-sm">
        <blockquote>
        Our [Privacy Policy](https://yakkl.com/legal/privacy/) explains our principles when it comes to the collection, processing, and storage of your information. This policy specifically explains how we, our partners, and users of our services deploy cookies, as well as the options you have to control them.
        </blockquote>
        
        <h3>What are cookies?</h3>
        
        <p>Cookies are small pieces of data, stored in text files, that are stored on your computer or other device when websites are loaded in a browser. They are widely used to "remember" you and your preferences, either for a single visit (through a "session cookie") or for multiple repeat visits (using a "persistent cookie"). They ensure a consistent and efficient experience for visitors, and perform essential functions such as allowing users to register and remain logged in. Cookies may be set by the site that you are visiting (known as "first party cookies"), or by third parties, such as those who serve content or provide advertising or analytics services on the website ("third party cookies"). Both websites and HTML emails may also contain other tracking technologies such as "web beacons" or "pixels." These are typically small transparent images that provide us with statistics, for similar purposes as cookies. They are often used in conjunction with cookies, though they are not stored on your computer in the same way. As a result, if you disable cookies, web beacons may still load, but their functionality will be restricted.</p>
        
        <h3>How we use cookies</h3>
        
        <p>We may use cookies for a number of different purposes. Some cookies are necessary for technical reasons; some enable a personalized experience for both visitors and registered users; and some allow the display of advertising from selected third party networks. Some of these cookies may be set when a page is loaded, or when a visitor takes a particular action (clicking the "like" or "follow" button on a post, for example). Many of the cookies we use are only set if you are a registered YAKKL.com or IndieCreative.works user (so you don’t have to log in every time, for example), while others are set whenever you visit one of our websites, irrespective of whether you have an account. For more information on the choices you have about the cookies we use, please see the Controlling Cookies section below.</p>
        
        <h3>Where we place cookies</h3>
        
        <p>We set cookies in a number of different locations across our services. These include:</p>
        
        <ul>
          <li>On our websites.</li>
          <li>In the administrative dashboards of our websites.</li>
          <li>On sites we host for our users.</li>
          <li>On sites that use our plugins.</li>
        </ul>

        <h3>Types of Cookie</h3>
        
        <p>The table below explains the types of cookies we use on our websites and why we use them.</p>
        
        <table>
          <thead>
            <th>Cookie Name</th>
            <th>Purpose</th>
          </thead>
          <tbody>
            <tr>
              <td>Analytics and Performance</td>
              <td>These cookies allow us to optimize performance by collecting information on how users interact with our websites, including which pages are visited most, as well as other analytical data. We use these details to improve how our websites function and to understand how users interact with them.</td>
            </tr>
            <tr>
              <td>Advertising</td>
              <td>These cookies are set by us and our advertising partners to provide you with relevant content and to understand that content’s effectiveness. They may be used to collect information about your online activities over time and across different websites to predict your preferences and to display more relevant advertisements to you. These cookies also allow a profile to be built about you and your interests and enable personalized ads to be shown to you based on your profile.</td>
            </tr>
          </tbody>
        </table>
        
        
        <h3>User Sites</h3>
        
        <p>In addition to the cookies set on our own sites, we utilize cookies for our stats feature. This tallies the unique numbers of visitors to a site, as well as the number from specific geographic locations. A visitor is counted when we see a user or browser for the first time in a given period.</p>
        
        <h3>Examples</h3>
        
        <p>Below are examples of the cookies set by YAKKL, with explanations of their purpose. Some of these cookies are set across our whole network, whereas some are specific to individual services. Please note that this is not an exhaustive list, but rather aims to be representative. Information about cookies that may be set by third parties, such as our ads partners, is below. Additionally, we occasionally set referrer cookies.</p>
        
        <p>In addition, people and companies that use our services to publish or host their own sites may place additional cookies. We provide more information on these cookies below.</p>
        
        <h4>Analytics and Performance</h4>
        <table>
          <thead>
            <th>Cookie Name</th>
            <th>Purpose</th>
          </thead>
          <tbody>
            <tr>
              <td>optimizelySegments</td>
              <td>Gathers information that helps us understand how visitors interact with our websites, which allows us to create a better visitor experience.</td>
            </tr>
            <tr>
              <td>ab</td>
              <td>Used for "AB testing" of new features.</td>
            </tr>
            <tr>
              <td>nux_flow_name</td>
              <td>Identifies which user signup flow was shown to the user.</td>
            </tr>
            <tr>
              <td>tk_ni / tk_ai / tk_qs</td>
              <td>Gathers information for our own, first party analytics tool about how our services are used. A collection of internal metrics for user activity, used to improve user experience.</td>
            </tr>
            <tr>
              <td>ls-affiliate-tracker</td>
              <td>Remembers the ID of the affiliate that referred the current user.</td>
            </tr>
            <tr>
              <td>utma / utmb / utmc / utmt / utmz / ga / gat / gid</td>
              <td>Google Analytics. Gathers information that helps us understand how visitors interact with our websites, which allow us to create a better experience for our visitors. Our users may also implement Google Analytics on their own websites.</td>
            </tr>
          </tbody>
        </table>        
        <h4>Advertising</h4>
        <table>
          <thead>
            <th>Cookie Name</th>
            <th>Purpose</th>
          </thead>
          <tbody>
            <td>ads</td>
            <td>Tracks if a visitor has clicked an ad before on any of the YAKKL sites</td>
          </tbody>
        </table>
        
        <p>Reduces the display of ads for repeat visitors.</p>
        
        <p>Please also see the section below on third party advertisements that you may see on our sites or sites that use our services.</p>
        
        <h4>Mobile Theme</h4>        
        <table>
          <thead>
            <th>Cookie Name</th>
            <th>Purpose</th>
          </thead>
          <tbody>
            <td>akm_mobile</td>
            <td>Remembers whether or not a user wishes to view the mobile version of a site.</td>
          </tbody>
        </table>
        
        <h4>Subscriptions</h4>
        <table>
          <thead>
            <th>Cookie Name</th>
            <th>Purpose</th>
          </thead>
          <tbody>
            <tr>
              <td>ls_comments_subscribe_[HASH]</td>
              <td>Remembers the state of the post and comment subscription checkboxes.</td>
            </tr>
            <tr>
              <td>ls_blog_subscribe_[HASH]</td>
              <td>Remembers the state of the post and comment subscription checkboxes.</td>
            </tr>
          </tbody>
        </table>
        
        <h4>EU Cookie Law Banner</h4>
        <table>
          <thead>
            <th>Cookie Name</th>
            <th>Purpose</th>
          </thead>
          <tbody>
            <td>eucookielaw</td>
            <td>Remembers the state of visitor acceptance to the EU Cookie Law banner.</td>
          </tbody>
        </table>
        
        <p>Please note that this section is not intended to be exhaustive, but rather aims to be representative, and that our users may set additional cookies (such as Google Analytics), depending on the features they have chosen to enable or the plugins they have installed.</p>
        
        <h3>Controlling Cookies</h3>
        
        <p>Visitors may wish to restrict the use of cookies or completely prevent them from being set. Most browsers provide for ways to control cookie behavior such as the length of time they are stored – either through built-in functionality or by utilizing third party plugins. If you disable cookies, please be aware that some of the features of our service may not function correctly. To find out more on how to manage and delete cookies, visit aboutcookies.org. For more details on your choices regarding use of your web browsing activity for interest-based advertising visit [youronlinechoices.eu](http://youronlinechoices.eu) (EU based) or [optout.aboutads.info](http://optout.aboutads.info) (US based).</p> 
        
        <p>On a mobile device, you may also be to adjust your settings to limit tracking.</p>
        
        <p>Some analytics services we use, which place their own cookies or web tags on your browser, offer their own opt out choices. For example, you can opt out of Google Analytics by installing [Google’s opt-out browser add-on](https://tools.google.com/dlpage/gaoptout), from Hotjar by using the [Do Not Track header](https://www.hotjar.com/legals/compliance/opt-out), and from Nielsen by clicking the opt out link found within [Nielsen's Privacy Statement](https://www.nielsen.com/us/en/legals/privacy-statement/digital-measurement/).</p>
        
        <h3>Our Internal Analytics Tool</h3>
        
        <p>In order to better understand how our services are used, we monitor certain user activities that take place within our products, including page views and clicks on any links used when managing a site via our dashboards. We call each one of these actions an “event.” Analytics events are attached to your WordPress.com account and are handled via a first party system that Automattic owns and maintains. In general, we record the following data for each event: IP address, WordPress.com user ID and username, WordPress.com-connected site ID (for sites not hosted on WordPress.com), user agent, referring URL, timestamp of event, browser language, and country code. We use this information to improve our products, make our marketing to you more relevant, personalize your experience, and for the other purposes described in our [Privacy Policy](https://yakkl.com/legals/privacy/). You may opt out of our analytics program through your user settings. By doing so, you won’t share information with our analytics tool about events or actions that happen after the opt-out, while logged in to your WordPress.com account. Note that opting out does not disable the functionality of the actions we track - for example, if you publish a post, we will still have record of that (don’t worry!), but for an event or action after you opt out, we will not have other data associated with that action or event in the analytics tool.</p>
        
        <h3>Consent for Advertising Cookies on Our Sites</h3>
        
        <p>You may see a “cookie banner” on our websites and dashboards. If you are visiting one of our sites from the EU, then we do not set, or allow our ad partners to set, cookies that are used to show you targeted ads before you click to accept. When you consent in this manner, we and our advertising partners may set advertising cookies on the site you are visiting and on our other websites, dashboards, and services, which we use to show you advertisements about our various YAKKL products. We’ll display the banner to you periodically, just in case you change your mind.</p>
        
        <h3>**Consent and Choices for Advertisements on Our Users’ Sites Through Our Ads Program**</h3>
        
        <p>You may see a “cookie banner” on our users’ websites, particularly if you are in the European Union. If so, then our ad program does not set, or allow our ad partners to set, cookies that are used to show you targeted ads before you accept.</p>
        
        <p>When you consent in this manner, we and our advertising partners may set third party advertising cookies in order to show you personalized ads on the website you are visiting and, if you are visiting a site in the YAKKL.com or IndieCreative.works network, on all websites within that network of sites. You’ll know that a site is in our network because it will have a yakkl.com or indiecreative.works subdomain. For other sites that participate in our ads program, your consent is only for personalized ads on the specific site you are visiting.</p>
        
        <h3>Contact Us</h3>
        
        <p>If you have any questions about our use of cookies, you can find the most relevant contact details in our [Privacy Policy](https://yakkl.com/legal/privacy/).</p>

      </div>
    </div>

  <Footer/>
</Gradient>
