import { useEffect, useRef } from 'react'
import styles from './Skills.module.css'

export default function Skills() {
  const tabs = useRef()

  useEffect(() => {
    const { current } = tabs
    console.log(current)
    const tabButtons = current.querySelectorAll('[role="tab"]')
    console.log(tabButtons)
    const tabPanels = Array.from(current.querySelectorAll('[role="tabpanel"]'))
    console.log(tabPanels)

    function handleTabClick(event) {
      tabPanels.forEach(panel => {
        panel.hidden = true
      })

      tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected', false)
      })

      event.currentTarget.setAttribute('aria-selected', true)
      const { id } = event.currentTarget

      console.log(tabPanels)
      const tabPanel = tabPanels.find(
        panel => panel.getAttribute('aria-labelledby') === id
      )
      tabPanel.hidden = false
    }

    tabButtons.forEach(button =>
      button.addEventListener('click', handleTabClick)
    )
  }, [])
  return (
    <div className={styles.skills}>
      <h1>Skills</h1>
      <div className={styles.wrapper}>
        <div ref={tabs} className={styles.tabs}>
          <div
            className={styles.tablist}
            role="tablist"
            aria-label="Programming Languages"
          >
            <button type="button" role="tab" v="true" id="html">
              HTML
            </button>
            <button type="button" role="tab" aria-selected="false" id="css">
              CSS
            </button>
            <button type="button" role="tab" aria-selected="false" id="js">
              JavaScript
            </button>
            <button type="button" role="tab" v="true" id="git">
              Git
            </button>
            <button type="button" role="tab" aria-selected="false" id="mobile">
              Mobile
            </button>
            <button type="button" role="tab" aria-selected="false" id="acc">
              Accessibility
            </button>
          </div>
          <div role="tabpanel" aria-labelledby="html">
            <p>HTML is great!</p>
          </div>
          <div role="tabpanel" aria-labelledby="css" hidden>
            <p>CSS is great</p>
          </div>
          <div role="tabpanel" aria-labelledby="js" hidden>
            <p>JavaScript is great!</p>
          </div>
          <div role="tabpanel" aria-labelledby="git" hidden>
            <p>Git is great!</p>
          </div>
          <div role="tabpanel" aria-labelledby="mobile" hidden>
            <p>Mobile is great</p>
          </div>
          <div role="tabpanel" aria-labelledby="acc" hidden>
            <p>Accessibility is great!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
