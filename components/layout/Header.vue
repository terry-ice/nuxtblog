<template>
  <div>
  <!-- <div id="preloader-container">
    <div id="preloader-wrap">
      <div id="preloader"></div>
    </div>
  </div> -->
  <header class="tada-container">
  
  
    <!-- LOGO -->    
    <div class="logo-container">
        <a href="index.html"><img src="~assets/img/logo.png" alt="logo" ></a>
          <div class="tada-social">
            <a href="#"><i class="icon-facebook5"></i></a>
              <a href="#"><i class="icon-twitter4"></i></a>
              <a href="#"><i class="icon-google-plus"></i></a>
              <a href="#"><i class="icon-vimeo4"></i></a>
              <a href="#"><i class="icon-linkedin2"></i></a>
          </div>
      </div>
      
      
    <!-- MENU DESKTOP -->
    <nav class="menu-desktop menu-sticky">
  
          <ul class="tada-menu">
                   <li><a href="#" class="active">HOME <i class="icon-arrow-down8"></i></a>
                      <ul class="submenu">
                        <li><a href="home-1-column.html">Home 1 Column</a></li>
                          <li><a href="index.html" class="active">Home 1 Column + Sidebar</a></li>                            
                          <li><a href="home-2-columns-with-sidebar.html">Home 2 Columns + Sidebar</a></li>
                          <li><a href="home-2-columns.html">Home 2 Columns</a></li>
                          <li><a href="home-3-columns.html">Home 3 Columns</a></li>                                                                      
                      </ul>
                  </li>
                  <li><a href="#">FEATURES <i class="icon-arrow-down8"></i></a>
                      <ul class="submenu">
                          <li><a href="page.html">Page</a></li>
                          <li><a href="page-with-right-sidebar.html">Page + Right Sidebar</a></li>
                          <li><a href="page-with-left-sidebar.html">Page + Left Sidebar</a></li>                            
                          <li><a href="post.html">Post Full Width</a></li>
                          <li><a href="post-with-right-sidebar.html">Post + Right Sidebar</a></li>
                          <li><a href="post-with-left-sidebar.html">Post + Left Sidebar</a></li>
                          <li><a href="no-sticky.html">No Sticky Menu</a></li>
                          <li><a href="no-slider.html">No Slider</a></li> 
                          <li><a href="#">Submenu <i class="icon-arrow-right8"></i></a>
                              <ul class="submenu">
                                  <li><a href="#">Item 1</a></li>
                                  <li><a href="#">Item 2</a></li>
                                  <li><a href="#">Item 3</a></li>
                                  <li><a href="#">Item 4</a></li>
                              </ul>
                          </li>                                                                                            
                      </ul>                
                  </li>                                     
                  <li><a href="#">BLOG <i class="icon-arrow-down8"></i></a>
                      <ul class="submenu">
                        <li><a href="blog-1-column.html">Blog 1 Column</a></li>
                          <li><a href="blog-1-column-with-sidebar.html">Blog + Sidebar</a></li>                            
                          <li><a href="blog-2-columns-with-sidebar.html">Blog 2 Columns + Sidebar</a></li>
                          <li><a href="blog-2-columns.html">Blog 2 Columns</a></li>
                          <li><a href="blog-3-columns.html">Blog 3 Columns</a></li>                                                                      
                      </ul>                
                  </li> 
                  <li><a href="about-us.html">ABOUT US</a></li>
                  <li><a href="contact.html">CONTACT</a></li>
          </ul>
      
      </nav>
      
      
      <!-- MENU MOBILE -->  
      <div class="menu-responsive-container"> 
          <div class="open-menu-responsive">|||</div> 
          <div class="close-menu-responsive">|</div>              
          <div class="menu-responsive">   
              <ul class="tada-menu">
                   <li><a href="#" class="active">HOME <i class="icon-arrow-down8"></i></a>
                      <ul class="submenu">
                        <li><a href="home-1-column.html">Home 1 Column</a></li>
                          <li><a href="index.html" class="active">Home 1 Column + Sidebar</a></li>                            
                          <li><a href="home-2-columns-with-sidebar.html">Home 2 Columns + Sidebar</a></li>
                          <li><a href="home-2-columns.html">Home 2 Columns</a></li>
                          <li><a href="home-3-columns.html">Home 3 Columns</a></li>                                                                      
                      </ul>
                  </li>
                  <li><a href="#">FEATURES <i class="icon-arrow-down8"></i></a>
                      <ul class="submenu">
                          <li><a href="page.html">Page</a></li>
                          <li><a href="page-with-right-sidebar.html">Page + Right Sidebar</a></li>
                          <li><a href="page-with-left-sidebar.html">Page + Left Sidebar</a></li>                            
                          <li><a href="post.html">Post Full Width</a></li>
                          <li><a href="post-with-right-sidebar.html">Post + Right Sidebar</a></li>
                          <li><a href="post-with-left-sidebar.html">Post + Left Sidebar</a></li>
                          <li><a href="no-sticky.html">No Sticky Menu</a></li>
                          <li><a href="no-slider.html">No Slider</a></li> 
                          <li><a href="#">Submenu <i class="icon-arrow-right8"></i></a>
                              <ul class="submenu">
                                  <li><a href="#">Item 1</a></li>
                                  <li><a href="#">Item 2</a></li>
                                  <li><a href="#">Item 3</a></li>
                                  <li><a href="#">Item 4</a></li>
                              </ul>
                          </li>                                                                                            
                      </ul>                
                  </li>                                     
                  <li><a href="#">BLOG <i class="icon-arrow-down8"></i></a>
                      <ul class="submenu">
                        <li><a href="blog-1-column.html">Blog 1 Column</a></li>
                          <li><a href="blog-1-column-with-sidebar.html">Blog + Sidebar</a></li>                            
                          <li><a href="blog-2-columns-with-sidebar.html">Blog 2 Columns + Sidebar</a></li>
                          <li><a href="blog-2-columns.html">Blog 2 Columns</a></li>
                          <li><a href="blog-3-columns.html">Blog 3 Columns</a></li>                                                                      
                      </ul>                
                  </li> 
                  <li><a href="about-us.html">ABOUT US</a></li>
                  <li><a href="contact.html">CONTACT</a></li>
              </ul>                        
          </div>
      </div> <!-- # menu responsive container -->
      
      
      <!-- SEARCH -->
      <div class="tada-search">
    <form>
            <div class="form-group-search">
                <input type="search" class="search-field" placeholder="Search and hit enter...">
                <button type="submit" class="search-btn"><i class="icon-search4"></i></button>
            </div>
          </form>
      </div>
      
      
<!-- 
      <div class="tada-slider">
    <ul id="tada-slider">
      <li>
                <img src="~assets/img/image-slider-1.jpg" alt="image slider 1">
                <div class="pattern"></div>
                <div class="tada-text-container">
                    <h1>AENEAN AC DIAM</h1>
                      <h2>VIVAMUS <span class="main-color">TINCIDUNT</span> FERMENTUM</h2>
                      <span class="button"><a href="#">TEXT BUTTON</a></span>
                  </div>
              </li>
      <li>
                <img src="~assets/img/image-slider-2.jpg" alt="image slider 2">
                  <div class="pattern"></div>
                  <div class="tada-text-container">
                    <h1>MAECENAS CONSECTETUR</h1>
                      <h2>Lorem <span class="main-color">ipsum dolor</span> sit amet</h2>
                      <span class="button"><a href="#">READ ME</a></span>
                  </div>
              </li>
      <li>
                <img src="~assets/img/image-slider-3.jpg" alt="image slider 3">
                <div class="pattern"></div>
                  <div class="tada-text-container">
                    <h1>AENEAN AC DIAM</h1>
                      <h2>VIVAMUS <span class="main-color">TINCIDUNT</span> FERMENTUM</h2>
                      <span class="button"><a href="#">TEXT BUTTON</a></span>
                  </div>                
              </li>
              <li>
                <img src="~assets/img/image-slider-4.jpg" alt="image slider 4">
                <div class="pattern"></div>
                  <div class="tada-text-container">
                    <h1>AENEAN AC DIAM</h1>
                      <h2>VIVAMUS <span class="main-color">TINCIDUNT</span> FERMENTUM</h2>
                      <span class="button"><a href="#">TEXT BUTTON</a></span>
                  </div>                
              </li>
    </ul>
          
      </div>
               -->
              
  </header>
</div>
</template>

<script>
  export default {
    name: 'layout-header'
  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/style.scss';
</style>
