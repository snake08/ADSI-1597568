<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=divice-width, initial-scale=1.0">
        <title>My First</title>
        <link href="css/style.css" rel="stylesheet">
        <link href="css/Media.css" rel="stylesheet">
        <!--<link href="Fonts/Indie_Flower/IndieFlower.ttf" rel="stylesheet">-->
    </head>

    <body>

        <div class="style">
            <center class="opc" ><h1>Calculator Alex</h1></center>
            <form action="calc.php" method="get">
                <input type="number" name="variable1">
                <br>
                <select name="Operation">
                    <option value="">Select a operation</option>
                    <option value="1">Sum</option>
                    <option value="2">Rest</option>
                    <option value="3">Mult</option>
                    <option value="4">Div</option>
                    <option value="5">Log</option>
                    <option value="6">Sqrt</option>
                    <option value="7">Pow</option>
                    <option value="8">√</option>
                    <option value="9">Root</option>
                </select>
                <br>
                <input type="number" name="variable2">
                <br>
                <button type="submit">Operate</button>
            </form>
            <p><?php if (isset($message) === true): ?>
                    <?php echo $message ?>
                <?php endif ?>
            </p>
        </div>
    </body>
</html>