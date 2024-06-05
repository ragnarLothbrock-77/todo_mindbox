import * as classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom';
import Logo from './../assets/logo.svg'
import All from './../assets/all.svg'
import Completed from './../assets/completed.svg'
import NotCompleted from './../assets/not_completed.svg'
import Clear from './../assets/clear.svg'
import Add from './../assets/add.svg'

const App = () => {
  return (
    <div className={classes.wrapper}>
  
      
      <div className={classes.main}>
        <Logo width={500} height={500} />
        <h2>What do you want to do today?</h2>
        <p>Tap + to add your tasks</p>
        <div className={classes.addButton}>
          <div className={classes.addButtonWrapper}>
            <Add className={classes.addButtonIcon} />
          </div>
        </div>
      </div>


      <footer className={classes.footer}>
        <div className={classes.footerContent}>
          <div className={classes.footerItem}>
            <Link className={classes.footerItemWrapper} to={'/all'}>
              <All className={classes.footerIcon} />
              <span className={classes.footerText}>All Tasks</span>
            </Link>
          </div>
          <div className={classes.footerItem}>
            <Link className={classes.footerItemWrapper} to={'/completed'}>
              <Completed className={classes.footerIcon} />
              <span className={classes.footerText}>Completed</span>
            </Link>
          </div>
          <div className={classes.footerItem}>
            <Link className={classes.footerItemWrapper} to={'/not_completed'}>
              <NotCompleted className={classes.footerIcon} />
              <span className={classes.footerText}>Not Completed</span>
            </Link>
          </div>
          <div className={classes.footerItem}>
            <Link className={classes.footerItemWrapper} to={'/clear'}>
              <Clear className={classes.footerIcon} />
              <span className={classes.footerText}>Clear Completed</span>
            </Link>
          </div>
          <Outlet />
        </div>
      </footer>
    </div>
  )
}

export default App;