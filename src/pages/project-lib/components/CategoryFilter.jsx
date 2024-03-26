import React from 'react'
import styles from './CategoryFilter.module.css'

export default function CategoryFilter() {
  return (
    <div className={styles.main}>
    <div className={styles.title}>SUBCRIPTION</div>
    <hr/>
    <li>
        <input class="checkboxInput" data-filter=".check1" type="checkbox" id="checkbox1"></input>
        <label class={styles.checkboxLabel} for="checkbox1">Free</label>
    </li>
    <li>
        <input class="checkboxInput" data-filter=".check2" type="checkbox" id="checkbox2"></input>
        <label class={styles.checkboxLabel} for="checkbox2">Premium</label>
    </li>

    <div className={styles.title}>ACTIVITY TYPE</div>
    <hr/>
    <li>
        <input class="checkboxInput" data-filter=".check3" type="checkbox" id="checkbox3"></input>
        <label class={styles.checkboxLabel} for="checkbox3">Free</label>
    </li>
    <li>
        <input class="checkboxInput" data-filter=".check4" type="checkbox" id="checkbox4"></input>
        <label class={styles.checkboxLabel} for="checkbox4">Premium</label>
    </li>

    <div className={styles.title}>YEAR LEVEL</div>
    <hr/>
    <li>
        <input class="checkboxInput" data-filter=".check5" type="checkbox" id="checkbox5"></input>
        <label class={styles.checkboxLabel} for="checkbox5">1 - 4</label>
    </li>
    <li>
        <input class="checkboxInput" data-filter=".check6" type="checkbox" id="checkbox6"></input>
        <label class={styles.checkboxLabel} for="checkbox6">5 - 6</label>
    </li>
    <li>
        <input class="checkboxInput" data-filter=".check7" type="checkbox" id="checkbox7"></input>
        <label class={styles.checkboxLabel} for="checkbox7">7 - 8</label>
    </li>
    <li>
        <input class="checkboxInput" data-filter=".check8" type="checkbox" id="checkbox8"></input>
        <label class={styles.checkboxLabel} for="checkbox8">9 - 13</label>
    </li>

    <div className={styles.title}>SUBJECT MATTER</div>
    <hr/>
    <li>
        <input class="checkboxInput" data-filter=".check9" type="checkbox" id="checkbox9"></input>
        <label class={styles.checkboxLabel} for="checkbox9">Computer Science</label>
    </li>
    <li>
        <input class="checkboxInput" data-filter=".check10" type="checkbox" id="checkbox10"></input>
        <label class={styles.checkboxLabel} for="checkbox10">Maths</label>
    </li>
    <li>
        <input class="checkboxInput" data-filter=".check11" type="checkbox" id="checkbox11"></input>
        <label class={styles.checkboxLabel} for="checkbox11">Science</label>
    </li>
    <li>
        <input class="checkboxInput" data-filter=".check12" type="checkbox" id="checkbox12"></input>
        <label class={styles.checkboxLabel} for="checkbox12">Language</label>
    </li>
    <li>
        <input class="checkboxInput" data-filter=".check13" type="checkbox" id="checkbox13"></input>
        <label class={styles.checkboxLabel} for="checkbox13">Art</label>
    </li>
    <li>
        <input class="checkboxInput" data-filter=".check14" type="checkbox" id="checkbox14"></input>
        <label class={styles.checkboxLabel} for="checkbox14">Music</label>
    </li>
    
    </div>
  )
}
