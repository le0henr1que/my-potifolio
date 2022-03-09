<!DOCTYPE html>
<html lang="en">
<head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

  <link rel="stylesheet" type="text/css" href="css/css.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="js/main.js"></script>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="img/ReadyPlayerMe-Avatar.png" >
  <title>Leonardo</title>
  <style>
    *{
      overflow: hidden;
    }
  </style>
 
</head>
<body class="gradient">
  
  <p class="text" >ESCOLHA UM AVATAR PARA EXPLORAR</p>

  <div class="avatar-imh">
    <img class="avatar" id="av1" src="img/monkey1.png" >
    <img class="avatar" id="av2" src="img/monkey2.png" >
    <img class="avatar" id="av3" src="img/monkey3.png" >
    <img class="avatar" id="av4" src="img/monkey4.png" >
    <img class="avatar" id="av5" src="img/monkey5.png" >
  </div>


  
  <div id="fundo">
    <div class="avatar-imh" style="margin-top:200px;">
      <img class="avatar avSelect" id="av1selecionado" style="display: none;" src="img/monkey1.png" >
      <img class="avatar avSelect" id="av2selecionado" style="display: none;" src="img/monkey2.png" >
      <img class="avatar avSelect" id="av3selecionado" style="display: none;" src="img/monkey3.png" >
      <img class="avatar avSelect" id="av4selecionado" style="display: none;" src="img/monkey4.png" >
      <img class="avatar avSelect" id="av5selecionado" style="display: none;" src="img/monkey5.png" >
    </div>
    <div class="color">
      <div id="triangulo-para-cima" ></div>
      <div class="cor cor1 " id="6C50FA" style="background: #6C50FA;"></div>
      <div class="cor cor2 " id="F6BF45" style="background: #F6BF45;"></div>
      <div class="cor cor3 " id="002642" style="background: #002642;"></div>
      <div class="cor cor4 " id="4BDBD5" style="background: #4BDBD5;"></div>
      <div class="cor cor5 " id="FF6E1A"  style="background: #FF6E1A;"></div>
      <div class="nome">
        <form method="post">
          <p style="font-family: sans-serif; color:rgb(82, 80, 80); font-weight: 700;">Seu Nome</p>
          <input name="nome" class="txt" type="text">
        </div>
        <div class="nb" style="margin: 10px;">
          <button type="submit" name="ir" class="btn btn-primary" style="float:right; cursor:pointer;" id="next">Next</button>
          <p style="float:left; cursor:pointer;" id="back">Back</p>
      </form>
      <?php  
      if(isset($_POST["ir"])){

        $name = $_POST['nome'];

        $curl = curl_init();
        
        curl_setopt_array($curl, [
          CURLOPT_URL => "https://nodeaccount.herokuapp.com/store",
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => "",
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 30,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => "POST",
          CURLOPT_POSTFIELDS => "{\n\t\"name\":\"".$name."\"\n}",
          CURLOPT_HTTPHEADER => [
            "Content-Type: application/json"
          ],
        ]);

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
          echo "cURL Error #:" . $err;
        } else {
          ?><script> 
          window.location.href = "https://gracious-roentgen-4c8d9c.netlify.app/page.html";
        </script><?php
        }
       
      }
      
      ?>
      </div>
    </div>
  </div>

</body>
</html>


    
