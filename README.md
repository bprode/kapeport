# kapeport
portfolio
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Bearod</title>  
  
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
        
        body {
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #6c3d08;
            color: #eed8be;
            padding: 20px 0;
            text-align: center;
        
        }
        h1 {
            font-size: 36px;
            color: #efefef;
            text-align:center;
        }
        h2{
            font-size: 36px;
            font-weight: bold;
            color: #6c3d08;
            text-align:center;

        }
        h3 {
            font-size: 20px;
            color: #6c3d08;
            text-align:center;
        

        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #efefef;
        }
        p {
            font-size: 16px;
            color:gray;
            text-align: center;
        }
        img {
            max-width: 25%;
            height:auto;
            
        }
        .menu-item {
            margin: 20px 0;
        }
        table {
            border-collapse: collapse;
            width: 40%;
            margin: 20px auto;
        }
        th, td {
            border: 1px solid #dddddd;
            text-align: left;
            color: gray;
            padding: 8px;
        }
        th {
            background-color: #f2f2f2;
        }
        footer{
            font-style: italic;
            text-align: center;   
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to My Page</h1>
    </header>
    <div class="container">
        <h2>Hi my name is...</h2>
        <div id="imageCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <center>
                    <img src="Icon Color1.png" alt="B-letter">
                </center>
                </div>
                <div class="carousel-item">
                    <center>
                    <img src="Icon Color2.png" alt="E-letter">
                    </center>
                </div>
                <div class="carousel-item">
                    <center>
                    <img src="Icon Color3.png" alt="A-letter">
                </center>
                </div>
            </div>
            <a class="carousel-control-prev" href="#imageCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#imageCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        
        <h2>About Me</h2>
        <div class="menu-item">
            <h3>Education</h3>
            <p>Graphic Design Program under IDD - SAIT</p>
        </div>
        <div class="menu-item">
            <h3>Interests</h3>
            <p>I love Coffee, Painting and Watching Tv Series (genre: comedy) </p>
        </div>
        <div>
            <h3>Music Preference</h3>
    <a href="https://www.youtube.com/watch?v=xl0NMRAnqbA" target="_blank"><center>Lofi Coffee House Music</center></a>
        </div>
        <h2>Follow Me or Send a DM</h2>
        <table>
            <thead>
                <tr>
                    <th colspan="2"> <center>Details</center> </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="
                        https://instagram.com/__bearod?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr" target="_blank"><center>Instagram</center></a></td>
                    <td><center>(+1) 555-5555</center></td>
                     <!-- Not Really my Number :'( -->
                </tr>
            </tbody>
        </table>
        
        
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <footer>
        <p> &copy; 2023 Bearod. All rights reserved.</p>
    </footer>
</body>
</html>
