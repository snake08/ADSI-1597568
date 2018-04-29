<?php

namespace MyFirstphp;
/**
 * Description of My First Calculator
 *
 * @author Alexander Vicuña Ramirez <avicuna@misena.edu.co>
 */
class MyFirstClass {
    /**
     * This one calculator variable.
     * 
     * @var float
     */
    private $variable1;
    /**
     * This second calculator variable.
     * 
     * @var float 
     */
    private $variable2;
    
    /**
     * Return the variable one
     *
     * @return float
     */
    
    public function getvaraible1(): float
    {
        return $this->variable1;
    }
    
    /**
     * Return the variable two
     * 
     * @return float
     */

    public function getvariable2(): float
     {
        return $this->variable2;
    }
    
    /**
     * set the variable one
     * 
     * @param float $variable1
     */

    public function setvariable1(float $variable1) 
    {
        $this->variable1 = $variable1;
    }
    
    /**
     * set the variable two
     * 
     * @param float $variable2
     */

    public function setvariable2(float $variable2)
    {
        $this->variable2 = $variable2;
    }
    
    /**
     ************************************************************
     */
   
    public function sum()
    {
        return $this->variable1 + $this->variable2;
    }
    
    public function rest()
    {
        return $this->variable1 - $this->variable2; 
    }
    public function mult()
    {
        return $this->variable1 * $this->variable2; 
    }
    public function div()
    {
      if ($this->variable2 !=0)
          {
         return $this->variable1 / $this->variable2;
      }
 else {
       throw new \Exception("error in the division by zero.", 1);   
      }
    }
    public function log()
    {
        return log ($this->variable1,$this->variable2);
    }
    public function squared()
    {
        return $this->variable1 * $this->variable1;
    }
    public function pow()
    {
            return pow($this->variable1, $this->variable2);
       
    }
    
    public function sqrt()
    {
        return sqrt($this->variable1);
    }
    public function root()
    {
        return pow($this->variable1, (1/$this->variable2));
    }
}