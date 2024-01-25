<header class="container">
  <?php

  if (isset($_SESSION["username"])) {
    echo '
    <div class="page-header">
      <h1>Lessebo samhällsförening</h1>
    </div>

    <div class="nav-left">
      <ul class="nav-list">
        <li class="nav-link"><a href="index.php">Hem</a></li>
        <li class="nav-link"><a href="about.php">Om oss</a></li>
        <li class="nav-link"><a href="contact.php">Kontakt</a></li>
        <li class="nav-link"><a href="admin.php">Admin</a></li>
      </ul>
    </div>';
  } else {
    echo '
    <div class="page-header">
      <h1>Lessebo samhällsförening</h1>
    </div>
    <div class="nav">
        <ul class="nav-list">
          <li class="nav-link"><a href="index.php">Hem</a></li>
          <li class="nav-link"><a href="about.php">Om oss</a></li>
          <li class="nav-link"><a href="contact.php">Kontakt</a></li>
        </ul>
        <button class="button-cta">Få vårt nyhetsbrev!</button>
    </div>';
  } ?>
</header>