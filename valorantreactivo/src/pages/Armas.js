import React, { useState, useEffect } from 'react';
import './Armas.css';


const WeaponDisplay = ({ weapon, onPrev, onNext }) => (
    <div className="weapon-display">
      <button onClick={onPrev}>←</button>
      <div className="weapon-info">
        <h1>{weapon.displayName}</h1>
        {weapon.displayIcon && <img src={weapon.displayIcon} alt={weapon.displayName} />}
      </div>
      <button onClick={onNext}>→</button>
    </div>
  );
  
  const WeaponSkins = ({ skins }) => (
    <div className="weapon-skins">
      <h1>Skins</h1>
      {skins
        .filter(skin => skin.displayIcon !== null && !skin.displayName.includes("Standard") && !skin.displayName.includes("Random") && !skin.displayName.includes("Melee") && !skin.displayName.includes("Luxe")) // Filtrar skins que tengan displayIcon no nulo y no contengan "Standard" en displayName
        .map(skin => (
          <div className="skin">
            {skin.displayIcon && <img src={skin.displayIcon} alt={skin.displayName} />}
            <h2>{skin.displayName}</h2>
          </div>
        ))}
    </div>
  );
  
  const WeaponStats = ({ stats, shopData }) => (
    <div className="weapon-stats">
      <h1>Stats</h1>
      <div>
        {shopData && (
          <>
            {shopData.category !== null && <p className='coste'>{shopData.category}</p>}
            {shopData.cost !== null && <p className='coste'>Cost: {shopData.cost}</p>}
          </>
        )}
        <div className='stats'>
        {stats.fireRate !== null && <div className='statind'><h4>Fire Rate</h4> <p>{stats.fireRate}</p><p>RDS/SEC</p></div>}
        {stats.magazineSize !== null && <div className='statind'><h4>Magazine Size</h4> <p>{stats.magazineSize}</p><p>RDS</p></div>}
        {stats.runSpeedMultiplier !== null && <div className='statind'><h4>Run Speed Multiplier</h4> <p>{6.75 * stats.runSpeedMultiplier}</p><p>M/SEC</p></div>}
        {stats.equipTimeSeconds !== null && <div className='statind'><h4>Equip Time (s)</h4> <p>{stats.equipTimeSeconds}</p><p>SEC</p></div>}
        {stats.reloadTimeSeconds !== null && <div className='statind'><h4>Reload Time (s)</h4> <p>{stats.reloadTimeSeconds}</p><p>SEC</p></div>}
        {stats.firstBulletAccuracy !== null && <div className='statind'><h4>First Bullet Accuracy</h4> <p>{stats.firstBulletAccuracy}</p><p>DEG (HIP)</p></div>}
        </div>
        <h3 className='titulodamage'>Damages</h3>
        {stats.damageRanges && stats.damageRanges.map((range, index) => (
         <div className='damages'>
         <table>
           <thead>
             <tr>
               <th>Range</th>
               <th>Head</th>
               <th>Body</th>
               <th>Leg</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>{range.rangeStartMeters}m - {range.rangeEndMeters}m</td>
               <td>{Math.round(range.headDamage)}</td>
               <td>{Math.round(range.bodyDamage)}</td>
               <td>{Math.round(range.legDamage)}</td>
             </tr>
           </tbody>
         </table>
       </div>
        ))}
        {stats.adsStats && (
          <>
            <div className='adsstats'>
            <h3>ADS stats</h3>
            <ul>
            {stats.adsStats.zoomMultiplier !== null && <li>ADS Zoom Multiplier: {stats.adsStats.zoomMultiplier}</li>}
            {stats.adsStats.fireRate !== null && <li>ADS Fire Rate: {stats.adsStats.fireRate}</li>}
            {stats.adsStats.runSpeedMultiplier !== null && <li>ADS Run Speed Multiplier: {stats.adsStats.runSpeedMultiplier * 100}%</li>}
            {stats.adsStats.burstCount !== null && <li>ADS Burst Count: {stats.adsStats.burstCount}</li>}
            {stats.adsStats.firstBulletAccuracy !== null && <li>ADS First Bullet Accuracy: {stats.adsStats.firstBulletAccuracy}</li>}
            </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
  
  const Armas = () => {
    const [weapons, setWeapons] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      fetch('https://valorant-api.com/v1/weapons')
        .then(response => response.json())
        .then(data => setWeapons(data.data));
    }, []);
  
    if (weapons.length === 0) {
      return <div>Loading...</div>;
    }
  
    const weapon = weapons[currentIndex];
  
    const handlePrev = () => {
      setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : weapons.length - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex(prevIndex => (prevIndex < weapons.length - 1 ? prevIndex + 1 : 0));
    };
  
    return (
      <div className="app">
        <WeaponDisplay weapon={weapon} onPrev={handlePrev} onNext={handleNext} />
        <div className="content">
          <WeaponSkins skins={weapon.skins} />
          {weapon.weaponStats && <WeaponStats stats={weapon.weaponStats} shopData={weapon.shopData} />}
        </div>
      </div>
    );
  };
  

export default Armas;