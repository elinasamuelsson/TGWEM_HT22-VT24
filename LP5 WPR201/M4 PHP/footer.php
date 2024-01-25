<footer>
  <?php

  if (isset($_SESSION["username"])) {
    echo "<div class='copy container'><p>&copy; Elina Samuelsson</p></div>";
  } else { ?>

    <form action="login.php" method="POST" class="container">
      <p>Inloggning för adminåtkomst:</p>
      <?php if (isset($_GET['error'])) { ?>

        <p>
          <?php echo $_GET['error']; ?>
        </p>

      <?php } ?>

      <label>Användarnamn:</label>

      <input type="text" name="username" placeholder="Användarnamn" />
      <label>Lösenord:</label>

      <input type="password" name="password" placeholder="Lösenord" />

      <button type="submit">Logga in</button>
    </form>
    <div class="copy">
      <p>&copy; Elina Samuelsson</p>
    </div>
  <?php } ?>
</footer>