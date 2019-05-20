<?php
    $url = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml';
    echo file_get_contents($url);